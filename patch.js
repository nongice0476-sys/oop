/* Output-based test cases patch */
let testResults={};
const OUTPUT_META={"ชุด 1":{"21":{"prompt":"เขียน class <code>Student</code> ที่มี class attribute <code>university='KMITL'</code> และ method <code>show(self)</code> ที่คืนค่า <code>self.university</code>. จากนั้นสร้าง <code>s1</code>, <code>s2</code> และกำหนด <code>s1.university='ABC'</code>. ระบบจะทดสอบผลลัพธ์จากการรันจริงตาม Test Cases ด้านล่าง และให้อธิบายว่าทำไมผลของ s1 กับ s2 จึงต่างกัน.","testCases":[{"name":"s1.show()","setup":"","expr":"s1.show()","expected":"ABC"},{"name":"s2.show()","setup":"","expr":"s2.show()","expected":"KMITL"},{"name":"Student.university","setup":"","expr":"Student.university","expected":"KMITL"}]},"22":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>. สร้าง object <code>a</code>, กำหนด <code>a.x=9</code> แล้วลบด้วย <code>del a.x</code>. ระบบจะตรวจค่าที่เกิดขึ้นจากการรันจริงก่อนและหลังการลบ property พร้อมอธิบายเรื่อง object property ที่บัง class attribute.","testCases":[{"name":"ค่าเริ่มต้นผ่าน object","setup":"a=A()","expr":"a.x","expected":"1"},{"name":"หลัง shadow","setup":"a=A(); a.x=9","expr":"a.x","expected":"9"},{"name":"หลัง del a.x","setup":"a=A(); a.x=9; del a.x","expr":"a.x","expected":"1"}]},"25":{"prompt":"เขียน class <code>Device</code> ที่มี class attribute <code>category='sensor'</code>. สร้าง <code>d1</code> และ <code>d2</code>, ให้ <code>d1.name='A'</code>, <code>d2.name='B'</code>, เปลี่ยน <code>d1.name='A2'</code> แล้วลบ <code>d1.name</code>. ระบบจะรัน Test Cases เพื่อตรวจ state ของ object และ class จริง.","testCases":[{"name":"Class attribute","setup":"","expr":"Device.category","expected":"sensor"},{"name":"d2 ไม่ถูกกระทบ","setup":"","expr":"d2.name","expected":"B"},{"name":"d1.name ถูกลบแล้วหรือไม่","setup":"","expr":"hasattr(d1,'name')","expected":"False"}]}},"ชุด 2":{"21":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>, สร้าง <code>a</code> และ <code>b</code>, จากนั้นแก้ <code>A.x=7</code>. ระบบจะรันและตรวจ output ของแต่ละ object จริง พร้อมอธิบายว่าทำไมทั้งสอง object จึงเห็นค่าที่เปลี่ยน.","testCases":[{"name":"a.x","setup":"","expr":"a.x","expected":"7"},{"name":"b.x","setup":"","expr":"b.x","expected":"7"},{"name":"A.x","setup":"","expr":"A.x","expected":"7"}]},"22":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>. สร้าง <code>a</code> และ <code>b</code> แล้วกำหนด <code>a.x=9</code>. ระบบจะตรวจค่าที่เกิดขึ้นจริงจากการรันเพื่อแสดงการ shadow class attribute.","testCases":[{"name":"a.x","setup":"","expr":"a.x","expected":"9"},{"name":"b.x","setup":"","expr":"b.x","expected":"1"},{"name":"A.x","setup":"","expr":"A.x","expected":"1"}]},"23":{"prompt":"เขียน class <code>Box</code> ที่มี method <code>set_value(self,v)</code> สำหรับกำหนด <code>self.value=v</code> และ method <code>show(self)</code> สำหรับคืนค่า <code>self.value</code>. สร้าง object <code>b=Box()</code>. ระบบจะเรียก methods ด้วยค่าหลายค่าและเทียบผลลัพธ์จริง.","testCases":[{"name":"set 10 แล้ว show","setup":"b.set_value(10)","expr":"b.show()","expected":"10"},{"name":"set 25 แล้ว show","setup":"b.set_value(25)","expr":"b.show()","expected":"25"},{"name":"แก้ซ้ำบน object เดิม","setup":"b.set_value(-3)","expr":"b.show()","expected":"-3"}]}},"ชุด 3":{"21":{"prompt":"เขียน class <code>A</code> แบบว่าง แล้วสร้าง <code>a</code> และ <code>b</code>. กำหนด <code>a.value=1</code> และ <code>b.value=2</code>. ระบบจะรันและตรวจว่า object สองตัวเก็บ state แยกกันจริง.","testCases":[{"name":"a.value","setup":"","expr":"a.value","expected":"1"},{"name":"b.value","setup":"","expr":"b.value","expected":"2"}]},"23":{"prompt":"เขียน class <code>Score</code> ที่มี class attribute <code>value=0</code>, method <code>set(self,v)</code> สำหรับกำหนดค่า และ <code>show(self)</code> สำหรับคืนค่า. ไม่จำเป็นต้องสร้าง object เอง เพราะ Test Runner จะสร้างให้และตรวจ behavior หลายกรณี.","testCases":[{"name":"ค่าเริ่มต้น","setup":"s=Score()","expr":"s.show()","expected":"0"},{"name":"set 7","setup":"s=Score(); s.set(7)","expr":"s.show()","expected":"7"},{"name":"สอง object แยกกัน","setup":"s1=Score(); s2=Score(); s1.set(9)","expr":"(s1.show(), s2.show())","expected":"(9, 0)"}]},"24":{"prompt":"เขียน class <code>A</code> แบบว่าง. สร้าง <code>a=A()</code>, ให้ <code>b=a</code>, กำหนด <code>a.x=1</code> แล้วลบ property ผ่าน <code>del b.x</code>. ระบบจะตรวจจากผลที่เกิดขึ้นจริงว่าทั้งสองชื่ออ้าง object เดียวกัน.","testCases":[{"name":"a และ b คือ object เดียวกัน","setup":"","expr":"a is b","expected":"True"},{"name":"x ถูกลบจาก object เดียวกัน","setup":"","expr":"hasattr(a,'x')","expected":"False"}]},"25":{"prompt":"เขียนโปรแกรม 10–15 บรรทัดโดยใช้ class ชื่อ <code>Item</code> ซึ่งมี class attribute <code>category='general'</code> และ method <code>show(self)</code> ที่คืนค่า <code>self.name</code>. สร้าง <code>i1</code>, <code>i2</code>, กำหนด name เป็น 'A' และ 'B', เปลี่ยน i1.name เป็น 'A2', ลบ i2.name และสร้าง alias <code>ref=i1</code>. ระบบจะตรวจ behavior จากการรันจริง.","testCases":[{"name":"Class attribute","setup":"","expr":"Item.category","expected":"general"},{"name":"i1.show() หลัง modify","setup":"","expr":"i1.show()","expected":"A2"},{"name":"i2.name ถูกลบ","setup":"","expr":"hasattr(i2,'name')","expected":"False"},{"name":"alias ref","setup":"","expr":"ref is i1","expected":"True"}]}}};
for(const [sn,items] of Object.entries(OUTPUT_META)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)];
    q.codeRequired=!!m;
    q.testCases=m?m.testCases:[];
    if(m&&m.prompt)q.prompt=m.prompt;
  }
}
const _oldLoad=load;load=function(){_oldLoad();try{testResults=JSON.parse(localStorage.getItem(key('tests'))||'{}')}catch{testResults={}}};
const _oldSave=save;save=function(){_oldSave();localStorage.setItem(key('tests'),JSON.stringify(testResults))};
function testPanel(q){
  if(!q.codeRequired)return '';
  const rs=testResults[q.id]||[];
  return `<div class="test-panel"><b>Test Cases — Expected vs Actual</b>${q.testCases.map((t,i)=>{const r=rs[i],cls=!r?'test-wait':r.pass?'test-pass':'test-fail',sym=!r?'○':r.pass?'✓':'✗';return `<div class="test-row"><span class="${cls}"><b>${sym}</b></span><div><b>${t.name}</b><div><b>Expected:</b> <code>${esc(t.expected)}</code></div><div><b>Actual:</b> <code>${r?esc(r.actual??''):'ยังไม่ได้รัน'}</code></div>${r&&r.error?`<div class="test-fail">${esc(r.error)}</div>`:''}</div></div>`}).join('')}<button class="run-tests" data-run-tests="${q.id}">🧪 Run Test Cases</button><div style="color:var(--muted);font-size:12px;margin-top:8px">รัน Python จริง แล้วเปรียบเทียบ Actual Output กับ Expected Output • รันซ้ำได้ตลอด</div></div>`;
}
wr=function(q){
  const g=submitted?grade(q,wa[q.id]):null,out=runOutputs[q.id]||'',rs=testResults[q.id]||[],passed=q.codeRequired?q.testCases.filter((_,i)=>rs[i]&&rs[i].pass).length:0,pct=q.codeRequired&&q.testCases.length?Math.round(passed/q.testCases.length*100):0;
  return `<section class="card" id="q${q.id}"><div class="qhead"><b>ข้อ ${q.id}</b><span>${q.topic} · ${q.difficulty}</span></div><div class="written-question"><span class="label">โจทย์</span><div class="prompt">${q.prompt}</div></div><div style="margin-top:12px"><b>พื้นที่ลองรัน Python</b><textarea class="code-editor" data-code-id="${q.id}" placeholder="# เขียน/ทดลองโค้ด Python ที่นี่...">${codeAns[q.id]||''}</textarea><div><button class="run-code" data-run-code="${q.id}">▶ Run Code</button>${q.codeRequired?`<button class="run-tests" data-run-tests="${q.id}">🧪 Run Test Cases</button>`:''}</div><div class="run-output">${out?esc(out):'Output จะแสดงที่นี่ — รันได้ตลอด'}</div></div>${q.codeRequired?testPanel(q):''}<div style="margin-top:12px"><b>คำตอบ / คำอธิบาย</b><textarea data-exp-id="${q.id}" ${submitted?'readonly':''} placeholder="อธิบายด้วยคำของคุณเอง...">${wa[q.id]||''}</textarea></div>${submitted?`${q.codeRequired?`<div class="grade"><b>Test Cases: ${pct}%</b><div>${passed}/${q.testCases.length} passed</div></div>`:''}${badge(g)}<div class="solution"><b>แนวคำตอบ</b><br>${q.solution}</div>`:''}</section>`;
};
bind=function(){
  document.querySelectorAll('input[type=radio]').forEach(x=>x.onchange=()=>{ans[+x.name.slice(1)]=+x.value;save();prog();nav()});
  document.querySelectorAll('[data-exp-id]').forEach(x=>x.oninput=()=>{wa[+x.dataset.expId]=x.value;save();prog();nav()});
  document.querySelectorAll('[data-code-id]').forEach(x=>x.oninput=()=>{const id=+x.dataset.codeId;codeAns[id]=x.value;runOutputs[id]='';testResults[id]=[];save();prog();nav()});
  document.querySelectorAll('[data-run-code]').forEach(b=>b.onclick=()=>runCode(+b.dataset.runCode,b));
  document.querySelectorAll('[data-run-tests]').forEach(b=>b.onclick=()=>runOutputTests(+b.dataset.runTests,b));
};
async function runOutputTests(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id),code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้ทดสอบ';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent;
  try{
    const py=await ensurePyodide(btn);btn.textContent='กำลังรัน tests...';btn.disabled=true;py.globals.set('USER_CODE',code);
    try{await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')")}catch(e){testResults[id]=q.testCases.map(()=>({pass:false,actual:'SyntaxError',error:String(e).split('\n').slice(-2).join(' ')}));save();render();return}
    let rs=[];
    for(const t of q.testCases){
      try{
        py.globals.set('SETUP_CODE',t.setup||'');py.globals.set('EXPR_CODE',t.expr);
        const actual=await py.runPythonAsync(`ns={}
exec(USER_CODE,ns)
if SETUP_CODE.strip():
    exec(SETUP_CODE,ns)
_val=eval(EXPR_CODE,ns)
repr(_val) if not isinstance(_val,str) else _val`);
        const a=String(actual),e=String(t.expected);rs.push({pass:a===e,actual:a,error:a===e?'':`Expected ${e} but got ${a}`});
      }catch(err){rs.push({pass:false,actual:'Error',error:String(err).split('\n').slice(-2).join(' ')})}
    }
    testResults[id]=rs;runOutputs[id]=`Test Cases: ${rs.filter(x=>x.pass).length}/${rs.length} passed`;save();render();
  }catch(e){runOutputs[id]='Runner Error: '+String(e);save();render()}finally{btn.disabled=false;btn.textContent=old}
}
const _oldReset=$('#reset').onclick;$('#reset').onclick=()=>{localStorage.removeItem(key('tests'));testResults={};_oldReset()};
