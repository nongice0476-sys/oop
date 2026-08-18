/* Output-only test cases: Test Case = expected stdout from real program execution */
let testResults={};
const OUTPUT_TESTS={"ชุด 1":{"21":{"prompt":"เขียน class <code>Student</code> ที่มี class attribute <code>university='KMITL'</code> และ method <code>show(self)</code> ที่คืนค่า <code>self.university</code>. ไม่ต้อง print ในคำตอบก็ได้ ระบบ Test Runner จะเรียกใช้งาน class ของคุณและตรวจจาก output ที่เกิดขึ้นจริง.","tests":[{"name":"Test 1","driver":"print(s1.show())","expected":"ABC"},{"name":"Test 2","driver":"print(s2.show())","expected":"KMITL"},{"name":"Test 3","driver":"print(Student.university)","expected":"KMITL"}]},"22":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>. ระบบจะสร้าง object และทดสอบการ shadow กับ <code>del</code> โดยดูจาก output ที่โปรแกรมสร้างจริง.","tests":[{"name":"Test 1","driver":"a=A(); print(a.x)","expected":"1"},{"name":"Test 2","driver":"a=A(); a.x=9; print(a.x)","expected":"9"},{"name":"Test 3","driver":"a=A(); a.x=9; del a.x; print(a.x)","expected":"1"}]},"23":{"prompt":"อธิบายว่าทำไม <code>a.f()</code> จึงสัมพันธ์กับ <code>A.f(a)</code> เมื่อ <code>f(self)</code> เป็น method ใน class A พร้อมอธิบายบทบาทของ <code>self</code>","tests":[]},"24":{"prompt":"วิเคราะห์โค้ด <code>x=A(); y=x; y.value=5; del x</code> แล้วอธิบายว่า <code>y.value</code> ยังอ่านได้หรือไม่ และเพราะอะไร","tests":[]},"25":{"prompt":"เขียน class <code>Device</code> ที่มี class attribute <code>category='sensor'</code>. ระบบจะสร้าง objects และตรวจ behavior จาก output ที่รันจริง.","tests":[{"name":"Test 1","driver":"print(Device.category)","expected":"sensor"},{"name":"Test 2","driver":"d1=Device(); d2=Device(); d1.name='A'; d2.name='B'; print(d2.name)","expected":"B"},{"name":"Test 3","driver":"d1=Device(); d1.name='A2'; del d1.name; print(hasattr(d1,'name'))","expected":"False"}]}},"ชุด 2":{"21":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>. ระบบจะสร้าง <code>a</code>, <code>b</code>, เปลี่ยน <code>A.x</code> และตรวจผลจาก stdout จริง.","tests":[{"name":"Test 1","driver":"a=A(); b=A(); A.x=7; print(a.x)","expected":"7"},{"name":"Test 2","driver":"a=A(); b=A(); A.x=7; print(b.x)","expected":"7"},{"name":"Test 3","driver":"A.x=7; print(A.x)","expected":"7"}]},"22":{"prompt":"เขียน class <code>A</code> ที่มี class attribute <code>x=1</code>. ระบบจะทดสอบ instance shadowing และเปรียบเทียบ stdout จริง.","tests":[{"name":"Test 1","driver":"a=A(); b=A(); a.x=9; print(a.x)","expected":"9"},{"name":"Test 2","driver":"a=A(); b=A(); a.x=9; print(b.x)","expected":"1"},{"name":"Test 3","driver":"a=A(); b=A(); a.x=9; print(A.x)","expected":"1"}]},"23":{"prompt":"เขียน class <code>Box</code> ที่มี method <code>set_value(self,v)</code> และ <code>show(self)</code>. ระบบจะสร้าง object เองและตรวจ stdout ที่ได้หลัง set หลายค่า.","tests":[{"name":"Test 1","driver":"b=Box(); b.set_value(10); print(b.show())","expected":"10"},{"name":"Test 2","driver":"b=Box(); b.set_value(25); print(b.show())","expected":"25"},{"name":"Test 3","driver":"b=Box(); b.set_value(-3); print(b.show())","expected":"-3"}]},"24":{"prompt":"เปรียบเทียบผลของ <code>del obj.attr</code>, <code>del obj</code>, และกรณีที่มีอีก reference หนึ่งชี้ object เดียวกัน","tests":[]},"25":{"prompt":"วิเคราะห์และเขียน output ทีละบรรทัดของโปรแกรมที่มี class attribute, object 2 ตัว, alias 1 ตัว, การ shadow attribute และการ del attribute โดยอธิบายเหตุผลของแต่ละบรรทัด","tests":[]}},"ชุด 3":{"21":{"prompt":"เขียน class <code>A</code> แบบว่าง. ระบบจะสร้าง object สองตัว กำหนด property และตรวจ stdout จริงเพื่อยืนยันว่า state แยกกัน.","tests":[{"name":"Test 1","driver":"a=A(); b=A(); a.value=1; b.value=2; print(a.value)","expected":"1"},{"name":"Test 2","driver":"a=A(); b=A(); a.value=1; b.value=2; print(b.value)","expected":"2"}]},"22":{"prompt":"อธิบายลำดับแนวคิดการหา <code>obj.x</code> ในกรณีที่ทั้ง object และ class อาจมี x โดยไม่ต้องใช้ศัพท์ภายใน Python ที่เกินบท","tests":[]},"23":{"prompt":"เขียน class <code>Score</code> ที่มี class attribute <code>value=0</code>, method <code>set(self,v)</code> และ <code>show(self)</code>. ระบบจะสร้าง object และเทียบ stdout จริง.","tests":[{"name":"Test 1","driver":"s=Score(); print(s.show())","expected":"0"},{"name":"Test 2","driver":"s=Score(); s.set(7); print(s.show())","expected":"7"},{"name":"Test 3","driver":"s1=Score(); s2=Score(); s1.set(9); print(s1.show(), s2.show())","expected":"9 0"}]},"24":{"prompt":"เขียน class <code>A</code> แบบว่าง. ระบบจะทดสอบ alias และการลบ property แล้วดู stdout จริง.","tests":[{"name":"Test 1","driver":"a=A(); b=a; print(a is b)","expected":"True"},{"name":"Test 2","driver":"a=A(); b=a; a.x=1; del b.x; print(hasattr(a,'x'))","expected":"False"}]},"25":{"prompt":"เขียน class <code>Item</code> ที่มี class attribute <code>category='general'</code> และ method <code>show(self)</code> ที่คืนค่า <code>self.name</code>. ระบบจะสร้าง object และตรวจ stdout จริงจากหลายสถานการณ์.","tests":[{"name":"Test 1","driver":"print(Item.category)","expected":"general"},{"name":"Test 2","driver":"i1=Item(); i1.name='A'; i1.name='A2'; print(i1.show())","expected":"A2"},{"name":"Test 3","driver":"i2=Item(); i2.name='B'; del i2.name; print(hasattr(i2,'name'))","expected":"False"},{"name":"Test 4","driver":"i1=Item(); i1.name='A'; ref=i1; print(ref is i1)","expected":"True"}]}}};
for(const [sn,items] of Object.entries(OUTPUT_TESTS)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)]; if(!m) continue;
    q.prompt=m.prompt; q.codeRequired=m.tests.length>0; q.testCases=m.tests;
  }
}
const _load=load; load=function(){_load();try{testResults=JSON.parse(localStorage.getItem(key('tests'))||'{}')}catch{testResults={}}};
const _save=save; save=function(){_save();localStorage.setItem(key('tests'),JSON.stringify(testResults))};

function outputPanel(q){
  if(!q.codeRequired)return '';
  const rs=testResults[q.id]||[];
  return `<div class="test-panel"><b>Test Cases = Expected Program Output</b>${q.testCases.map((t,i)=>{
    const r=rs[i],sym=!r?'○':r.pass?'✓':'✗',cl=!r?'test-wait':r.pass?'test-pass':'test-fail';
    return `<div class="test-row"><span class="${cl}"><b>${sym}</b></span><div style="width:100%">
      <b>Test ${i+1}</b>
      <div><b>Expected Output</b></div><pre class="run-output">${esc(t.expected)}</pre>
      <div><b>Actual Output</b></div><pre class="run-output">${!r?'ยังไม่ได้รัน':esc(r.actual||'')}</pre>
      ${r?.error?`<div class="test-fail">${esc(r.error)}</div>`:''}
      <button class="run-tests" data-out-one="${q.id}" data-out-i="${i}">▶ Run Test ${i+1}</button>
    </div></div>`;
  }).join('')}<button class="run-tests" data-out-all="${q.id}">🧪 Run All Tests</button>
  <div style="color:var(--muted);font-size:12px;margin-top:8px">Test Case คือ output ที่โปรแกรมควรสร้างจริง ระบบจับ stdout แล้วเทียบ Expected ↔ Actual</div></div>`;
}

const _wr=wr; wr=function(q){const h=_wr(q);if(!q.codeRequired)return h;const p=h.lastIndexOf('</section>');return h.slice(0,p)+outputPanel(q)+h.slice(p)};
const _bind=bind; bind=function(){
  _bind();
  document.querySelectorAll('[data-out-one]').forEach(b=>b.onclick=()=>runOutputTest(+b.dataset.outOne,+b.dataset.outI,b));
  document.querySelectorAll('[data-out-all]').forEach(b=>b.onclick=()=>runAllOutputTests(+b.dataset.outAll,b));
};

async function captureOutput(code,driver,btn){
  const py=await ensurePyodide(btn);
  py.globals.set('USER_CODE',code);py.globals.set('DRIVER_CODE',driver||'');
  await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')");
  return String(await py.runPythonAsync(`
import sys,io,traceback
_ns={};_buf=io.StringIO();_oo,_oe=sys.stdout,sys.stderr
sys.stdout=sys.stderr=_buf
try:
    exec(USER_CODE,_ns)
    exec(DRIVER_CODE,_ns)
except Exception:
    traceback.print_exc()
finally:
    sys.stdout,sys.stderr=_oo,_oe
_buf.getvalue().rstrip()
`)).replace(/\r\n/g,'\n').trimEnd();
}

async function runOutputTest(id,i,btn){
  const q=DATA[setName].written.find(x=>x.id===id),t=q.testCases[i],code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้รัน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent;btn.disabled=true;btn.textContent='กำลังรัน...';
  try{
    const a=await captureOutput(code,t.driver,btn),e=String(t.expected).replace(/\r\n/g,'\n').trimEnd(),rs=testResults[id]||[];
    rs[i]={pass:a===e,actual:a,error:a===e?'':'Expected Output ไม่ตรงกับ Actual Output'};testResults[id]=rs;save();render();
  }catch(err){
    const rs=testResults[id]||[];rs[i]={pass:false,actual:'Error',error:String(err).split('\n').slice(-2).join(' ')};testResults[id]=rs;save();render();
  }finally{btn.disabled=false;btn.textContent=old}
}

async function runAllOutputTests(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id),code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้รัน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent,rs=[];btn.disabled=true;btn.textContent='กำลังรันทั้งหมด...';
  try{
    for(const t of q.testCases){
      try{const a=await captureOutput(code,t.driver,btn),e=String(t.expected).replace(/\r\n/g,'\n').trimEnd();rs.push({pass:a===e,actual:a,error:a===e?'':'Expected Output ไม่ตรงกับ Actual Output'})}
      catch(err){rs.push({pass:false,actual:'Error',error:String(err).split('\n').slice(-2).join(' ')})}
    }
    testResults[id]=rs;runOutputs[id]=`Tests passed: ${rs.filter(x=>x.pass).length}/${rs.length}`;save();render();
  }finally{btn.disabled=false;btn.textContent=old}
}

const _reset=$('#reset').onclick;$('#reset').onclick=()=>{localStorage.removeItem(key('tests'));testResults={};_reset()};
