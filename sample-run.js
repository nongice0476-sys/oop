/* Sample-run testcase UI, matching university assignment systems */
let testResults={};
const SAMPLE_META={"ชุด 1":{"21":{"prompt":"เขียน class <code>Student</code> ที่มี class attribute <code>university='KMITL'</code> และ method <code>show(self)</code> ที่คืนค่า <code>self.university</code>. จากนั้นสร้าง <code>s1</code>, <code>s2</code>, กำหนด <code>s1.university='ABC'</code> และอธิบายผลของ <code>s1.show()</code>, <code>s2.show()</code>, <code>Student.university</code>.<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ชื่อ class <code>Student</code>, objects <code>s1</code>, <code>s2</code>, และกำหนด <code>s1.university='ABC'</code>.</small>","codeRequired":true,"testCases":[{"title":"Basic class behavior","driver":"print(\"*** Student Class ***\")\nprint(\"s1.show() :\", s1.show())\nprint(\"s2.show() :\", s2.show())\nprint(\"Student.university :\", Student.university)\nprint(\"===== End of program =====\")","expected":"*** Student Class ***\ns1.show() : ABC\ns2.show() : KMITL\nStudent.university : KMITL\n===== End of program ====="}]},"22":{"prompt":"อธิบายเหตุการณ์เมื่อ object มี property ชื่อเดียวกับ class attribute และผลของการใช้ <code>del object.property</code> โดยยกตัวอย่างโค้ดสั้น ๆ<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>A</code> ที่มี class attribute <code>x=1</code> และ object <code>a</code>.</small>","codeRequired":true,"testCases":[{"title":"Shadow class attribute","driver":"print(\"*** Attribute Lookup ***\")\nprint(\"Before shadow :\", a.x)\na.x = 9\nprint(\"After shadow :\", a.x)\nprint(\"Class x :\", A.x)\nprint(\"===== End of program =====\")","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 9\nClass x : 1\n===== End of program ====="},{"title":"Delete object property","driver":"a.x = 9\ndel a.x\nprint(\"*** Delete Property ***\")\nprint(\"a.x after del :\", a.x)\nprint(\"A.x :\", A.x)\nprint(\"===== End of program =====\")","expected":"*** Delete Property ***\na.x after del : 1\nA.x : 1\n===== End of program ====="}]},"23":{"prompt":"อธิบายว่าทำไม <code>a.f()</code> จึงสัมพันธ์กับ <code>A.f(a)</code> เมื่อ <code>f(self)</code> เป็น method ใน class A พร้อมอธิบายบทบาทของ <code>self</code>","codeRequired":false,"testCases":[]},"24":{"prompt":"วิเคราะห์โค้ด <code>x=A(); y=x; y.value=5; del x</code> แล้วอธิบายว่า <code>y.value</code> ยังอ่านได้หรือไม่ และเพราะอะไร","codeRequired":false,"testCases":[]},"25":{"prompt":"เขียนโปรแกรมสั้น ๆ ที่ใช้เฉพาะเนื้อหาในบท Class & Object เพื่อแสดงให้เห็น 5 อย่าง: สร้าง class, สร้าง 2 objects, ใช้ class attribute, เพิ่ม/แก้ object property, และลบ object property จากหนึ่ง object โดยไม่กระทบอีก object พร้อมอธิบาย output<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>Device</code>, objects <code>d1</code>, <code>d2</code>; ให้ <code>Device.category='sensor'</code>, <code>d1.name='A2'</code>, <code>d2.name='B'</code> และลบ <code>d1.name</code> ก่อนจบโปรแกรม.</small>","codeRequired":true,"testCases":[{"title":"Two objects keep separate properties","driver":"print(\"*** Device Objects ***\")\nprint(\"category :\", Device.category)\nprint(\"d1.name :\", d1.name)\nprint(\"d2.name :\", d2.name)\nprint(\"===== End of program =====\")","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : A2\nd2.name : B\n===== End of program ====="},{"title":"Delete one object's property","driver":"print(\"*** Delete Object Property ***\")\nprint(\"d2.name :\", d2.name)\nprint(\"d1 has name :\", hasattr(d1, \"name\"))\nprint(\"===== End of program =====\")","expected":"*** Delete Object Property ***\nd2.name : B\nd1 has name : False\n===== End of program ====="}]}},"ชุด 2":{"21":{"prompt":"เขียนตัวอย่างที่พิสูจน์ว่าแก้ class attribute ผ่านชื่อ class สามารถมีผลต่อหลาย object ที่ยังไม่ได้ shadow attribute นั้น และอธิบายผล<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>A</code>, objects <code>a</code>, <code>b</code> และให้ค่าหลังแก้ class attribute เป็น <code>A.x=7</code>.</small>","codeRequired":true,"testCases":[{"title":"Update shared class attribute","driver":"print(\"*** Class Attribute ***\")\nprint(\"a.x :\", a.x)\nprint(\"b.x :\", b.x)\nprint(\"A.x :\", A.x)\nprint(\"===== End of program =====\")","expected":"*** Class Attribute ***\na.x : 7\nb.x : 7\nA.x : 7\n===== End of program ====="}]},"22":{"prompt":"สร้างตัวอย่างที่ object หนึ่ง shadow class attribute แต่อีก object ยังอ่านค่าจาก class แล้วอธิบาย output<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>A</code>, objects <code>a</code>, <code>b</code> โดย <code>A.x=1</code> และ <code>a.x=9</code>.</small>","codeRequired":true,"testCases":[{"title":"Instance shadows class","driver":"print(\"*** Shadowing ***\")\nprint(\"a.x :\", a.x)\nprint(\"b.x :\", b.x)\nprint(\"A.x :\", A.x)\nprint(\"===== End of program =====\")","expected":"*** Shadowing ***\na.x : 9\nb.x : 1\nA.x : 1\n===== End of program ====="}]},"23":{"prompt":"เขียน class ที่มี method 2 ตัว โดยทั้งสองใช้ self อ่าน/แก้ property ของ object เดียวกัน และอธิบายว่าทำไมการแก้ผ่าน method หนึ่งจึงเห็นผลในอีก method<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>Box</code>, object <code>b</code>, methods <code>set_value(self,v)</code> และ <code>show(self)</code>.</small>","codeRequired":true,"testCases":[{"title":"Set and show value","driver":"print(\"*** Box Methods ***\")\nb.set_value(10)\nprint(\"show :\", b.show())\nb.set_value(25)\nprint(\"show :\", b.show())\nprint(\"===== End of program =====\")","expected":"*** Box Methods ***\nshow : 10\nshow : 25\n===== End of program ====="},{"title":"Negative value","driver":"print(\"*** Box Methods ***\")\nb.set_value(-3)\nprint(\"show :\", b.show())\nprint(\"===== End of program =====\")","expected":"*** Box Methods ***\nshow : -3\n===== End of program ====="}]},"24":{"prompt":"เปรียบเทียบผลของ <code>del obj.attr</code>, <code>del obj</code>, และกรณีที่มีอีก reference หนึ่งชี้ object เดียวกัน","codeRequired":false,"testCases":[]},"25":{"prompt":"วิเคราะห์และเขียน output ทีละบรรทัดของโปรแกรมที่มี class attribute, object 2 ตัว, alias 1 ตัว, การ shadow attribute และการ del attribute โดยอธิบายเหตุผลของแต่ละบรรทัด","codeRequired":false,"testCases":[]}},"ชุด 3":{"21":{"prompt":"เขียนโค้ดพิสูจน์ว่า object สองตัวจาก class เดียวกันสามารถมี object properties ต่างกัน และอธิบายเหตุผล<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>A</code>, objects <code>a</code>, <code>b</code> และกำหนด <code>a.value=1</code>, <code>b.value=2</code>.</small>","codeRequired":true,"testCases":[{"title":"Objects keep independent state","driver":"print(\"*** Object State ***\")\nprint(\"a.value :\", a.value)\nprint(\"b.value :\", b.value)\nprint(\"===== End of program =====\")","expected":"*** Object State ***\na.value : 1\nb.value : 2\n===== End of program ====="}]},"22":{"prompt":"อธิบายลำดับแนวคิดการหา <code>obj.x</code> ในกรณีที่ทั้ง object และ class อาจมี x โดยไม่ต้องใช้ศัพท์ภายใน Python ที่เกินบท","codeRequired":false,"testCases":[]},"23":{"prompt":"สร้าง class <code>Score</code> ที่มี class attribute <code>value=0</code>, method <code>set(self,v)</code> และ <code>show(self)</code>. วิเคราะห์ผลของ s1/s2 เมื่อ set เฉพาะ s1<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>Score</code> ที่มี <code>value=0</code>, <code>set(self,v)</code>, <code>show(self)</code>.</small>","codeRequired":true,"testCases":[{"title":"Default class value","driver":"print(\"*** Score Class ***\")\ns = Score()\nprint(\"default :\", s.show())\nprint(\"===== End of program =====\")","expected":"*** Score Class ***\ndefault : 0\n===== End of program ====="},{"title":"Different object state","driver":"s1 = Score()\ns2 = Score()\ns1.set(9)\nprint(\"*** Score Class ***\")\nprint(\"s1 :\", s1.show())\nprint(\"s2 :\", s2.show())\nprint(\"===== End of program =====\")","expected":"*** Score Class ***\ns1 : 9\ns2 : 0\n===== End of program ====="}]},"24":{"prompt":"สร้างตัวอย่างที่มี object หนึ่งตัว แต่มีสองชื่อตัวแปรอ้างถึงมัน จากนั้นลบ property ผ่านชื่อหนึ่ง และพิสูจน์ว่าอีกชื่อเห็นผลเดียวกัน<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>A</code>, <code>a=A()</code>, <code>b=a</code>, กำหนด <code>a.x=1</code> แล้วลบด้วย <code>del b.x</code>.</small>","codeRequired":true,"testCases":[{"title":"Alias points to same object","driver":"print(\"*** Object Alias ***\")\nprint(\"a is b :\", a is b)\nprint(\"a has x :\", hasattr(a, \"x\"))\nprint(\"===== End of program =====\")","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program ====="}]},"25":{"prompt":"ออกแบบโจทย์ตัวอย่างของตนเอง 1 โปรแกรม (10–15 บรรทัด) ที่รวม class attribute, 2 objects, 1 method, object property, การ modify, การ delete property และการ delete object reference แล้วอธิบายทุก output ทีละบรรทัด<br><br><small><b>เงื่อนไขสำหรับ Testcase:</b> สำหรับการทดสอบ ให้ใช้ class <code>Item</code>, class attribute <code>category='general'</code>, method <code>show(self)</code>, objects <code>i1</code>, <code>i2</code> และ alias <code>ref=i1</code>; ให้ i1.name จบที่ <code>'A2'</code> และลบ i2.name.</small>","codeRequired":true,"testCases":[{"title":"Integrated Item behavior","driver":"print(\"*** Item Class ***\")\nprint(\"category :\", Item.category)\nprint(\"i1.show() :\", i1.show())\nprint(\"i2 has name :\", hasattr(i2, \"name\"))\nprint(\"ref is i1 :\", ref is i1)\nprint(\"===== End of program =====\")","expected":"*** Item Class ***\ncategory : general\ni1.show() : A2\ni2 has name : False\nref is i1 : True\n===== End of program ====="}]}}};

for(const [sn,items] of Object.entries(SAMPLE_META)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)];
    if(!m) continue;
    q.prompt=m.prompt;
    q.codeRequired=!!m.codeRequired;
    q.testCases=m.testCases||[];
  }
}

const style=document.createElement('style');
style.textContent=`
.sample-tests{margin-top:18px;display:grid;gap:18px}
.sample-case{border:1px solid #cfd7e4;background:#f7f8fa;border-radius:10px;overflow:hidden;color:#111}
.sample-title{font-size:24px;color:#1428c8;padding:14px 18px;border-bottom:1px solid #d8dde7;background:#fff}
.sample-terminal{margin:18px;background:#3f3f3f;color:#f7f7f7;padding:16px;border-radius:8px;min-height:130px;white-space:pre-wrap;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:15px;line-height:1.45;box-shadow:0 3px 0 #e7dfe3}
.sample-case.pass{border-color:#56ba89}.sample-case.fail{border-color:#d76275}
.sample-case details{margin:0 18px 12px}.sample-actual{margin:8px 0}
.sample-ok{color:#16834c;font-size:15px}.sample-ng{color:#c7344b;font-size:15px}
.sample-run,.sample-run-all{background:#164c3a!important;color:#fff!important;border:1px solid #3b8f70!important;border-radius:10px;padding:9px 12px;margin-top:10px}
.sample-run{margin:0 18px 16px}.sample-run-all{font-size:16px}
@media(max-width:700px){.sample-title{font-size:20px}.sample-terminal{margin:12px;font-size:13px}.sample-run{margin-left:12px}}
`;
document.head.appendChild(style);

const _loadBase=load;
load=function(){
  _loadBase();
  try{testResults=JSON.parse(localStorage.getItem(key('sampletests'))||'{}')}catch{testResults={}}
};
const _saveBase=save;
save=function(){
  _saveBase();
  localStorage.setItem(key('sampletests'),JSON.stringify(testResults));
};

function samplePanel(q){
  if(!q.codeRequired)return '';
  const rs=testResults[q.id]||[];
  return `<div class="sample-tests">${q.testCases.map((t,i)=>{
    const r=rs[i],state=!r?'':r.pass?' pass':' fail';
    return `<div class="sample-case${state}">
      <div class="sample-title">Testcase : #${i+1}${r?` <span class="${r.pass?'sample-ok':'sample-ng'}">${r.pass?'✓ PASS':'✗ FAIL'}</span>`:''}</div>
      <pre class="sample-terminal">${esc(t.expected)}</pre>
      ${r?`<details><summary>Actual output</summary><pre class="sample-terminal sample-actual">${esc(r.actual||'')}</pre>${r.error?`<div class="sample-ng">${esc(r.error)}</div>`:''}</details>`:''}
      <button class="sample-run" data-sample-one="${q.id}" data-sample-i="${i}">▶ Run Testcase #${i+1}</button>
    </div>`;
  }).join('')}
  <button class="sample-run-all" data-sample-all="${q.id}">▶ Run All Testcases</button></div>`;
}

const _wrBase=wr;
wr=function(q){
  const html=_wrBase(q);
  if(!q.codeRequired)return html;
  const p=html.lastIndexOf('</section>');
  return html.slice(0,p)+samplePanel(q)+html.slice(p);
};

const _bindBase=bind;
bind=function(){
  _bindBase();
  document.querySelectorAll('[data-sample-one]').forEach(b=>b.onclick=()=>runSampleOne(+b.dataset.sampleOne,+b.dataset.sampleI,b));
  document.querySelectorAll('[data-sample-all]').forEach(b=>b.onclick=()=>runSampleAll(+b.dataset.sampleAll,b));
};

async function sampleCapture(code,driver,btn){
  const py=await ensurePyodide(btn);
  py.globals.set('USER_CODE',code);
  py.globals.set('DRIVER_CODE',driver||'');
  await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')");
  return String(await py.runPythonAsync(`
import sys,io,traceback
ns={}
oo,oe=sys.stdout,sys.stderr

# Run student's code silently so its own print() does not pollute testcase output.
silent=io.StringIO()
sys.stdout=sys.stderr=silent
try:
    exec(USER_CODE,ns)
finally:
    sys.stdout,sys.stderr=oo,oe

# Capture only the output produced by this testcase driver.
buf=io.StringIO()
sys.stdout=sys.stderr=buf
try:
    exec(DRIVER_CODE,ns)
except Exception:
    traceback.print_exc()
finally:
    sys.stdout,sys.stderr=oo,oe

buf.getvalue().rstrip()
`)).replace(/\r\n/g,'\n').trimEnd();
}

async function runSampleOne(id,i,btn){
  const q=DATA[setName].written.find(x=>x.id===id),t=q.testCases[i],code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='กรุณาเขียนโค้ดก่อน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent;btn.disabled=true;btn.textContent='กำลังรัน...';
  try{
    const actual=await sampleCapture(code,t.driver,btn);
    const expected=String(t.expected).replace(/\r\n/g,'\n').trimEnd();
    const rs=testResults[id]||[];
    rs[i]={pass:actual===expected,actual,error:actual===expected?'':'Output ไม่ตรงกับ Testcase'};
    testResults[id]=rs;
  }catch(e){
    const rs=testResults[id]||[];
    rs[i]={pass:false,actual:'Error',error:String(e).split('\n').slice(-3).join(' ')};
    testResults[id]=rs;
  }
  save();render();btn.disabled=false;btn.textContent=old;
}

async function runSampleAll(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id),code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='กรุณาเขียนโค้ดก่อน';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent,rs=[];btn.disabled=true;btn.textContent='กำลังรันทั้งหมด...';
  for(const t of q.testCases){
    try{
      const actual=await sampleCapture(code,t.driver,btn),expected=String(t.expected).replace(/\r\n/g,'\n').trimEnd();
      rs.push({pass:actual===expected,actual,error:actual===expected?'':'Output ไม่ตรงกับ Testcase'});
    }catch(e){rs.push({pass:false,actual:'Error',error:String(e).split('\n').slice(-3).join(' ')})}
  }
  testResults[id]=rs;runOutputs[id]=`Testcases passed: ${rs.filter(x=>x.pass).length}/${rs.length}`;save();render();btn.disabled=false;btn.textContent=old;
}

const _resetBase=$('#reset').onclick;
$('#reset').onclick=()=>{
  localStorage.removeItem(key('sampletests'));
  testResults={};
  _resetBase();
};
