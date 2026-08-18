/* Exact stdin -> stdout judge. No hidden driver, no generated answer blocks. */
let exactResults={};
const EXACT_META={"ชุด 1":{"21":{"prompt":"<b>โจทย์:</b> สร้างโปรแกรม Python เพื่อเก็บข้อมูลมหาวิทยาลัยของนักศึกษา 2 คนด้วย Class และ Object\n\n<b>ข้อกำหนด</b>\n1. สร้าง class <code>Student</code>\n2. สร้าง object <code>s1</code> และ <code>s2</code>\n3. รับชื่อมหาวิทยาลัยของ s1 และ s2 จาก input คนละ 1 บรรทัด\n4. เก็บค่าที่รับมาไว้ใน object property <code>university</code>\n5. แสดงผลตามรูปแบบใน Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: มหาวิทยาลัยของ s1<br>\nบรรทัดที่ 2: มหาวิทยาลัยของ s2<br><br>\n<b>การตรวจ:</b> stdout ต้องตรงกับ Expected Output ทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"ABC\nKMITL\n","expected":"*** Student Class ***\ns1.university : ABC\ns2.university : KMITL\n===== End of program =====\n"},{"input":"KMITL\nKMITL\n","expected":"*** Student Class ***\ns1.university : KMITL\ns2.university : KMITL\n===== End of program =====\n"},{"input":"MIT\nStanford\n","expected":"*** Student Class ***\ns1.university : MIT\ns2.university : Stanford\n===== End of program =====\n"}]},"22":{"prompt":"เขียนโปรแกรม Python เพื่อแสดงแนวคิด <b>Class Attribute และ Object Property</b>\n\n1. สร้าง class <code>A</code> ที่มี class attribute <code>x = 1</code>\n2. รับค่า integer 1 ค่า\n3. สร้าง object <code>a</code>\n4. แสดงค่าเดิมของ <code>a.x</code>\n5. กำหนดค่าที่รับมาให้ <code>a.x</code>\n6. แสดงค่า <code>a.x</code> และ <code>A.x</code>\n7. ลบ <code>a.x</code> และแสดงค่า <code>a.x</code> อีกครั้ง\n8. รูปแบบ output ต้องตรง Testcase ทุกตัวอักษร\n\n<b>Input:</b> integer 1 ค่า<br>\n<b>การตรวจ:</b> เปรียบเทียบ stdout จริงของโปรแกรมกับ Testcase แบบ exact match","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 9\nClass x : 1\nAfter del : 1\n===== End of program =====\n"},{"input":"25\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 25\nClass x : 1\nAfter del : 1\n===== End of program =====\n"}]},"23":{"prompt":"อธิบายว่าทำไม <code>a.f()</code> จึงสัมพันธ์กับ <code>A.f(a)</code> เมื่อ <code>f(self)</code> เป็น method ใน class A พร้อมอธิบายบทบาทของ <code>self</code>","codeRequired":false,"testCases":[]},"24":{"prompt":"วิเคราะห์โค้ด <code>x=A(); y=x; y.value=5; del x</code> แล้วอธิบายว่า <code>y.value</code> ยังอ่านได้หรือไม่ และเพราะอะไร","codeRequired":false,"testCases":[]},"25":{"prompt":"เขียนโปรแกรม Python ที่ใช้ class <code>Device</code>\n\n1. class มี class attribute <code>category = 'sensor'</code>\n2. สร้าง object <code>d1</code> และ <code>d2</code>\n3. รับชื่อของ d1 และ d2 จาก input\n4. กำหนดเป็น object properties\n5. แสดง category และชื่อของ object ทั้งสองตามรูปแบบ Testcase\n6. output ต้องตรงทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"A\nB\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : A\nd2.name : B\n===== End of program =====\n"},{"input":"Temp\nPressure\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : Temp\nd2.name : Pressure\n===== End of program =====\n"}]}},"ชุด 2":{"21":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรม Python เพื่อแสดงผลของการเปลี่ยน Class Attribute\n\n<b>ข้อกำหนด</b>\n1. สร้าง class <code>A</code> ที่มี class attribute <code>x = 1</code>\n2. สร้าง object <code>a</code> และ <code>b</code>\n3. รับ integer 1 ค่า\n4. นำค่าที่รับมาไปกำหนดให้ <code>A.x</code>\n5. แสดงค่า <code>a.x</code>, <code>b.x</code> และ <code>A.x</code>\n\n<b>Input</b><br>\ninteger 1 ค่า<br><br>\n<b>การตรวจ:</b> stdout ต้องตรงกับ Expected Output ทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"7\n","expected":"*** Class Attribute ***\na.x : 7\nb.x : 7\nA.x : 7\n===== End of program =====\n"},{"input":"100\n","expected":"*** Class Attribute ***\na.x : 100\nb.x : 100\nA.x : 100\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Class Attribute ***\na.x : -5\nb.x : -5\nA.x : -5\n===== End of program =====\n"}]},"22":{"prompt":"เขียนโปรแกรม Python เพื่อสาธิต <b>Instance Shadowing</b>\n\n1. class <code>A</code> มี class attribute <code>x = 1</code>\n2. สร้าง <code>a</code> และ <code>b</code>\n3. รับค่า integer 1 ค่าแล้วกำหนดให้ <code>a.x</code>\n4. แสดง <code>a.x</code>, <code>b.x</code>, <code>A.x</code>\n5. output ต้องตรง Testcase ทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Shadowing ***\na.x : 9\nb.x : 1\nA.x : 1\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Shadowing ***\na.x : -5\nb.x : 1\nA.x : 1\n===== End of program =====\n"}]},"23":{"prompt":"เขียนโปรแกรม Python ที่มี class <code>Box</code>\n\n1. object เก็บ property <code>value</code>\n2. มี method <code>set_value(self, v)</code>\n3. มี method <code>show(self)</code> คืนค่า value\n4. รับ integer 2 ค่า คนละบรรทัด\n5. set ค่าแรกแล้วแสดงผล จากนั้น set ค่าที่สองแล้วแสดงผล\n6. output ต้องตรง Testcase ทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"10\n25\n","expected":"*** Box Methods ***\nshow : 10\nshow : 25\n===== End of program =====\n"},{"input":"-3\n0\n","expected":"*** Box Methods ***\nshow : -3\nshow : 0\n===== End of program =====\n"}]},"24":{"prompt":"เปรียบเทียบผลของ <code>del obj.attr</code>, <code>del obj</code>, และกรณีที่มีอีก reference หนึ่งชี้ object เดียวกัน","codeRequired":false,"testCases":[]},"25":{"prompt":"วิเคราะห์และเขียน output ทีละบรรทัดของโปรแกรมที่มี class attribute, object 2 ตัว, alias 1 ตัว, การ shadow attribute และการ del attribute โดยอธิบายเหตุผลของแต่ละบรรทัด","codeRequired":false,"testCases":[]}},"ชุด 3":{"21":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรม Python เพื่อแสดงว่า Object แต่ละตัวสามารถเก็บ State ของตนเองได้\n\n<b>ข้อกำหนด</b>\n1. สร้าง class <code>A</code>\n2. สร้าง object <code>a</code> และ <code>b</code>\n3. รับ integer 2 ค่า\n4. กำหนดค่าแรกให้ <code>a.value</code>\n5. กำหนดค่าที่สองให้ <code>b.value</code>\n6. แสดงค่าของ object ทั้งสองตาม Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: ค่า a.value<br>\nบรรทัดที่ 2: ค่า b.value<br><br>\n<b>การตรวจ:</b> stdout ต้องตรงกับ Expected Output ทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"1\n2\n","expected":"*** Object State ***\na.value : 1\nb.value : 2\n===== End of program =====\n"},{"input":"100\n-50\n","expected":"*** Object State ***\na.value : 100\nb.value : -50\n===== End of program =====\n"},{"input":"0\n0\n","expected":"*** Object State ***\na.value : 0\nb.value : 0\n===== End of program =====\n"}]},"22":{"prompt":"อธิบายลำดับแนวคิดการหา <code>obj.x</code> ในกรณีที่ทั้ง object และ class อาจมี x โดยไม่ต้องใช้ศัพท์ภายใน Python ที่เกินบท","codeRequired":false,"testCases":[]},"23":{"prompt":"เขียนโปรแกรม Python ที่มี class <code>Score</code>\n\n1. มี class attribute <code>value = 0</code>\n2. มี method <code>set(self, v)</code>\n3. มี method <code>show(self)</code>\n4. สร้าง s1 และ s2\n5. รับ integer 1 ค่าและ set ให้ s1 เท่านั้น\n6. แสดง s1 และ s2 ตาม Testcase\n7. output ต้องตรงทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Score Class ***\ns1 : 9\ns2 : 0\n===== End of program =====\n"},{"input":"100\n","expected":"*** Score Class ***\ns1 : 100\ns2 : 0\n===== End of program =====\n"}]},"24":{"prompt":"เขียนโปรแกรม Python เพื่อแสดงการอ้าง object เดียวกันด้วยตัวแปร 2 ชื่อ\n\n1. สร้าง class <code>A</code>\n2. สร้าง <code>a = A()</code> และ <code>b = a</code>\n3. กำหนด <code>a.x</code> จาก integer ที่รับมา\n4. ลบ property ผ่าน <code>del b.x</code>\n5. แสดงว่า <code>a is b</code> และตรวจว่า a ยังมี x หรือไม่\n6. output ต้องตรงทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"1\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"},{"input":"999\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"}]},"25":{"prompt":"เขียนโปรแกรม Python ที่รวม Class Attribute, Method, Object Properties และ Alias\n\n1. สร้าง class <code>Item</code> ที่มี <code>category = 'general'</code>\n2. มี method <code>show(self)</code> คืนค่า <code>self.name</code>\n3. สร้าง <code>i1</code> และ <code>i2</code>\n4. รับชื่อ 2 ค่า\n5. กำหนดให้ i1.name และ i2.name\n6. สร้าง <code>ref = i1</code>\n7. แสดงผลตาม Testcase\n8. output ต้องตรงทุกตัวอักษร","codeRequired":true,"testCases":[{"input":"A2\nB\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : A2\ni2.show() : B\nref is i1 : True\n===== End of program =====\n"},{"input":"Book\nPen\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : Book\ni2.show() : Pen\nref is i1 : True\n===== End of program =====\n"}]}}};

for(const [sn,items] of Object.entries(EXACT_META)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)];
    if(!m) continue;
    q.prompt=m.prompt;
    q.codeRequired=!!m.codeRequired;
    q.testCases=m.testCases||[];
  }
}

const _loadExactBase=load;
load=function(){
  _loadExactBase();
  try{exactResults=JSON.parse(localStorage.getItem(key('exacttests'))||'{}')}catch{exactResults={}}
};
const _saveExactBase=save;
save=function(){
  _saveExactBase();
  localStorage.setItem(key('exacttests'),JSON.stringify(exactResults));
};

function exactPanel(q){
  if(!q.codeRequired)return '';
  const rs=exactResults[q.id]||[];
  return `<div class="sample-tests">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <h3 style="margin:0">Testcases</h3>
      <button class="run-all" data-exact-run="${q.id}">▶ Run</button>
    </div>
    ${q.testCases.map((t,i)=>{
      const r=rs[i],state=!r?'':r.pass?' pass':' fail';
      return `<div class="sample-case${state}">
        <div class="sample-title">Testcase : #${i+1}</div>
        <div style="padding:14px 18px 0;color:#111"><b>Input</b></div>
        <pre class="sample-terminal">${esc(t.input)}</pre>
        <div style="padding:0 18px;color:#111"><b>Expected Output</b></div>
        <pre class="sample-terminal">${esc(t.expected)}</pre>
        ${r?`<div class="result-block">
          <div class="result-label">Result</div>
          <pre class="sample-terminal sample-actual">${esc(r.actual??'')}</pre>
          <div class="${r.pass?'sample-ok':'sample-ng'} result-status">
            ${r.pass?'✅ ตรงกับ Testcase ทุกตัวอักษร':'❌ ไม่ตรงกับ Testcase'}
          </div>
        </div>`:''}
      </div>`;
    }).join('')}
    <div style="color:var(--muted);font-size:12px">
      Exact match: space, เครื่องหมาย, ตัวพิมพ์เล็ก/ใหญ่ และ newline ต้องตรงทั้งหมด
    </div>
  </div>`;
}

const _baseWrExact=wr;
wr=function(q){
  if(!q.codeRequired)return _baseWrExact(q);
  const g=submitted?grade(q,wa[q.id]):null;
  const rs=exactResults[q.id]||[],pass=rs.filter(x=>x&&x.pass).length;
  return `<section class="card" id="q${q.id}">
    <div class="qhead"><b>ข้อ ${q.id}</b><span>${q.topic} · ${q.difficulty}</span></div>
    <div class="written-question"><span class="label">โจทย์</span><div class="prompt">${q.prompt}</div></div>
    <div style="margin-top:12px"><b>โค้ด Python</b>
      <textarea class="code-editor" data-code-id="${q.id}" placeholder="# เขียนโปรแกรม Python ที่นี่...">${codeAns[q.id]||''}</textarea>
    </div>
    ${exactPanel(q)}
    <div style="margin-top:12px"><b>คำตอบ / คำอธิบาย</b>
      <textarea data-exp-id="${q.id}" ${submitted?'readonly':''} placeholder="อธิบายด้วยคำของคุณเอง...">${wa[q.id]||''}</textarea>
    </div>
    ${submitted?`<div class="grade"><b>Testcases:</b> ${pass}/${q.testCases.length} passed</div>${badge(g)}<div class="solution"><b>แนวคำตอบ</b><br>${q.solution}</div>`:''}
  </section>`;
};

const _baseBindExact=bind;
bind=function(){
  _baseBindExact();
  document.querySelectorAll('[data-code-id]').forEach(x=>x.oninput=()=>{
    const id=+x.dataset.codeId;
    codeAns[id]=x.value;
    exactResults[id]=[];
    save();prog();nav();
  });
  document.querySelectorAll('[data-exact-run]').forEach(b=>b.onclick=()=>runExactAll(+b.dataset.exactRun,b));
};

async function captureExactStdout(code,inputText,btn){
  const py=await ensurePyodide(btn);
  py.globals.set('USER_CODE',code);
  py.globals.set('INPUT_TEXT',inputText||'');
  await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')");
  return String(await py.runPythonAsync(`
import sys,io,traceback
buf=io.StringIO()
oldin,oldout,olderr=sys.stdin,sys.stdout,sys.stderr
sys.stdin=io.StringIO(INPUT_TEXT)
sys.stdout=buf
sys.stderr=buf
try:
    exec(USER_CODE,{})
except Exception:
    traceback.print_exc()
finally:
    sys.stdin,sys.stdout,sys.stderr=oldin,oldout,olderr
buf.getvalue()
`)).replace(/\r\n/g,'\n');
}

async function runExactAll(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id),code=codeAns[id]||'';
  if(!code.trim()){alert('กรุณาเขียนโค้ดก่อนกด Run');return}
  const bad=unsafe(code);if(bad){alert(bad);return}
  const old=btn.textContent,rs=[];
  btn.disabled=true;btn.textContent='กำลังรัน...';
  try{
    for(const t of q.testCases){
      try{
        const actual=await captureExactStdout(code,t.input,btn);
        const expected=String(t.expected).replace(/\r\n/g,'\n');
        rs.push({pass:actual===expected,actual});
      }catch(err){
        rs.push({pass:false,actual:String(err)});
      }
    }
    exactResults[id]=rs;
    save();render();
  }finally{
    btn.disabled=false;btn.textContent=old;
  }
}

const _baseResetExact=$('#reset').onclick;
$('#reset').onclick=()=>{
  localStorage.removeItem(key('exacttests'));
  exactResults={};
  _baseResetExact();
};

$('#submit').onclick=()=>{
  if(!submitted){
    if(!confirm('ส่งข้อสอบและเปิดเฉลยหรือไม่?'))return;
    submitted=true;localStorage.setItem(key('sub'),'1');render();
  }
  const c=DATA[setName].mcq.reduce((s,q)=>s+(ans[q.id]===q.answer),0);
  const m=Math.round(c/20*100);
  const codeQs=DATA[setName].written.filter(q=>q.codeRequired);
  const tc=codeQs.length?Math.round(codeQs.reduce((s,q)=>{
    const rs=exactResults[q.id]||[];
    return s+(rs.filter(x=>x&&x.pass).length/q.testCases.length*100);
  },0)/codeQs.length):100;
  const gs=DATA[setName].written.map(q=>grade(q,wa[q.id]));
  const exp=Math.round(gs.reduce((a,g)=>a+g.score,0)/gs.length);
  $('#score').innerHTML=`<h2>${setName}</h2>
    <p><b>ปรนัย:</b> ${c}/20 (${m}%)</p>
    <p><b>Programming:</b> ${tc}% <small>(exact stdout only)</small></p>
    <p><b>คำอธิบาย:</b> ${exp}% <small>(ประเมินแยก)</small></p>
    <div class="solution"><b>Judge:</b> stdin → โปรแกรมผู้ใช้ → stdout; ไม่มี hidden driver และไม่มีการสร้างคำตอบแทนผู้ใช้</div>`;
  scoreDlg.showModal();
};
