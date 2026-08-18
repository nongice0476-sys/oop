/* Per-test runnable output comparison patch */
let testResults={};
const TEST_META={"ชุด 1":{"21":{"testCases":[{"name":"s1.show()","setup":"","expr":"s1.show()","expected":"ABC"},{"name":"s2.show()","setup":"","expr":"s2.show()","expected":"KMITL"},{"name":"Student.university","setup":"","expr":"Student.university","expected":"KMITL"}]},"22":{"testCases":[{"name":"ค่าเริ่มต้นผ่าน object","setup":"a=A()","expr":"a.x","expected":"1"},{"name":"หลัง shadow","setup":"a=A(); a.x=9","expr":"a.x","expected":"9"},{"name":"หลัง del a.x","setup":"a=A(); a.x=9; del a.x","expr":"a.x","expected":"1"}]},"25":{"testCases":[{"name":"Class attribute","setup":"","expr":"Device.category","expected":"sensor"},{"name":"d2 ไม่ถูกกระทบ","setup":"","expr":"d2.name","expected":"B"},{"name":"d1.name ถูกลบแล้วหรือไม่","setup":"","expr":"hasattr(d1,'name')","expected":"False"}]}},"ชุด 2":{"21":{"testCases":[{"name":"a.x","setup":"","expr":"a.x","expected":"7"},{"name":"b.x","setup":"","expr":"b.x","expected":"7"},{"name":"A.x","setup":"","expr":"A.x","expected":"7"}]},"22":{"testCases":[{"name":"a.x","setup":"","expr":"a.x","expected":"9"},{"name":"b.x","setup":"","expr":"b.x","expected":"1"},{"name":"A.x","setup":"","expr":"A.x","expected":"1"}]},"23":{"testCases":[{"name":"set 10 แล้ว show","setup":"b.set_value(10)","expr":"b.show()","expected":"10"},{"name":"set 25 แล้ว show","setup":"b.set_value(25)","expr":"b.show()","expected":"25"},{"name":"แก้ซ้ำบน object เดิม","setup":"b.set_value(-3)","expr":"b.show()","expected":"-3"}]}},"ชุด 3":{"21":{"testCases":[{"name":"a.value","setup":"","expr":"a.value","expected":"1"},{"name":"b.value","setup":"","expr":"b.value","expected":"2"}]},"23":{"testCases":[{"name":"ค่าเริ่มต้น","setup":"s=Score()","expr":"s.show()","expected":"0"},{"name":"set 7","setup":"s=Score(); s.set(7)","expr":"s.show()","expected":"7"},{"name":"สอง object แยกกัน","setup":"s1=Score(); s2=Score(); s1.set(9)","expr":"(s1.show(), s2.show())","expected":"(9, 0)"}]},"24":{"testCases":[{"name":"a และ b คือ object เดียวกัน","setup":"","expr":"a is b","expected":"True"},{"name":"x ถูกลบจาก object เดียวกัน","setup":"","expr":"hasattr(a,'x')","expected":"False"}]},"25":{"testCases":[{"name":"Class attribute","setup":"","expr":"Item.category","expected":"general"},{"name":"i1.show() หลัง modify","setup":"","expr":"i1.show()","expected":"A2"},{"name":"i2.name ถูกลบ","setup":"","expr":"hasattr(i2,'name')","expected":"False"},{"name":"alias ref","setup":"","expr":"ref is i1","expected":"True"}]}}};

for(const [sn,items] of Object.entries(TEST_META)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)];
    q.codeRequired=!!m;
    q.testCases=m?.testCases||[];
  }
}

const _loadBase=load;
load=function(){
  _loadBase();
  try{testResults=JSON.parse(localStorage.getItem(key('tests'))||'{}')}catch{testResults={}}
};
const _saveBase=save;
save=function(){
  _saveBase();
  localStorage.setItem(key('tests'),JSON.stringify(testResults));
};

function testPanel(q){
  if(!q.codeRequired)return '';
  const rs=testResults[q.id]||[];
  return `<div class="test-panel"><b>Test Cases — กดรันทีละเคสได้</b>
    ${q.testCases.map((t,i)=>{
      const r=rs[i], cls=!r?'test-wait':r.pass?'test-pass':'test-fail', sym=!r?'○':r.pass?'✓':'✗';
      const actual=!r?'ยังไม่ได้รัน':esc(r.actual??'');
      const setup=t.setup?`<div><b>Setup:</b> <code>${esc(t.setup)}</code></div>`:'';
      const err=r?.error?`<div class="test-fail" style="font-size:13px">${esc(r.error)}</div>`:'';
      return `<div class="test-row"><span class="${cls}"><b>${sym}</b></span><div style="width:100%">
        <b>${t.name}</b>${setup}
        <div><b>Run:</b> <code>${esc(t.expr)}</code></div>
        <div><b>Expected Output:</b> <code>${esc(t.expected)}</code></div>
        <div><b>Actual Output:</b> <code>${actual}</code></div>${err}
        <button class="run-tests" data-run-one-q="${q.id}" data-run-one-i="${i}">▶ Run Test ${i+1}</button>
      </div></div>`;
    }).join('')}
    <button class="run-tests" data-run-all="${q.id}">🧪 Run All Tests</button>
    <div style="color:var(--muted);font-size:12px;margin-top:8px">แต่ละ Test Case รันได้เอง และกดซ้ำได้ตลอด • เปรียบเทียบ Expected กับ Actual จาก Python จริง</div>
  </div>`;
}

const _wrBase=wr;
wr=function(q){
  const base=_wrBase(q);
  if(!q.codeRequired)return base;
  const pos=base.lastIndexOf('</section>');
  return base.slice(0,pos)+testPanel(q)+base.slice(pos);
};

const _bindBase=bind;
bind=function(){
  _bindBase();
  document.querySelectorAll('[data-run-one-q]').forEach(b=>b.onclick=()=>runOneTest(+b.dataset.runOneQ,+b.dataset.runOneI,b));
  document.querySelectorAll('[data-run-all]').forEach(b=>b.onclick=()=>runAllTests(+b.dataset.runAll,b));
};

async function evalOne(code,t,btn){
  const py=await ensurePyodide(btn);
  py.globals.set('USER_CODE',code);
  await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')");
  py.globals.set('SETUP_CODE',t.setup||'');
  py.globals.set('EXPR_CODE',t.expr);
  const actual=await py.runPythonAsync(`
ns={}
exec(USER_CODE,ns)
if SETUP_CODE.strip():
    exec(SETUP_CODE,ns)
_v=eval(EXPR_CODE,ns)
repr(_v) if not isinstance(_v,str) else _v
`);
  return String(actual);
}

async function runOneTest(id,index,btn){
  const q=DATA[setName].written.find(x=>x.id===id), t=q.testCases[index], code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้รัน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent;
  try{
    btn.textContent='กำลังรัน...';btn.disabled=true;
    const actual=await evalOne(code,t,btn), expected=String(t.expected);
    const rs=testResults[id]||[];
    rs[index]={pass:actual===expected,actual,error:actual===expected?'':`Expected ${expected} but got ${actual}`};
    testResults[id]=rs;save();render();
  }catch(e){
    const rs=testResults[id]||[];
    rs[index]={pass:false,actual:'Error',error:String(e).split('\n').slice(-2).join(' ')};
    testResults[id]=rs;save();render();
  }finally{btn.disabled=false;btn.textContent=old}
}

async function runAllTests(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id), code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้รัน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent, rs=[];
  try{
    btn.textContent='กำลังรันทั้งหมด...';btn.disabled=true;
    for(const t of q.testCases){
      try{
        const actual=await evalOne(code,t,btn), expected=String(t.expected);
        rs.push({pass:actual===expected,actual,error:actual===expected?'':`Expected ${expected} but got ${actual}`});
      }catch(e){
        rs.push({pass:false,actual:'Error',error:String(e).split('\n').slice(-2).join(' ')});
      }
    }
    testResults[id]=rs;
    runOutputs[id]=`Tests passed: ${rs.filter(x=>x.pass).length}/${rs.length}`;
    save();render();
  }finally{btn.disabled=false;btn.textContent=old}
}

const _resetBase=$('#reset').onclick;
$('#reset').onclick=()=>{
  localStorage.removeItem(key('tests'));
  testResults={};
  _resetBase();
};
