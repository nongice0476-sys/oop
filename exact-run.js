/* Exact stdin -> stdout judge. No hidden driver, no generated answer blocks. */
let exactResults={};
const EXACT_META={"ชุด 1":{"21":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรม Python เพื่อเก็บชื่อมหาวิทยาลัยของนักศึกษา 2 คนด้วย Class และ Object\n\nสร้าง class <code>Student</code> จากนั้นสร้าง object <code>s1</code> และ <code>s2</code> รับชื่อมหาวิทยาลัยของนักศึกษาทั้งสองจาก input แล้วเก็บไว้ใน property <code>university</code> ของแต่ละ object ก่อนแสดงผลตามรูปแบบใน Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: ชื่อมหาวิทยาลัยของ s1<br>\nบรรทัดที่ 2: ชื่อมหาวิทยาลัยของ s2","codeRequired":true,"testCases":[{"input":"ABC\nKMITL\n","expected":"*** Student Class ***\ns1.university : ABC\ns2.university : KMITL\n===== End of program =====\n"},{"input":"KMITL\nKMITL\n","expected":"*** Student Class ***\ns1.university : KMITL\ns2.university : KMITL\n===== End of program =====\n"},{"input":"MIT\nStanford\n","expected":"*** Student Class ***\ns1.university : MIT\ns2.university : Stanford\n===== End of program =====\n"}]},"22":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมเพื่อแสดงความแตกต่างระหว่าง Class Attribute และ Object Property\n\nกำหนด class <code>A</code> ให้มี class attribute <code>x = 1</code> จากนั้นสร้าง object <code>a</code> รับ integer 1 ค่าแล้วนำไปกำหนดให้ <code>a.x</code> แสดงค่าเดิม ค่าใหม่ ค่า <code>A.x</code> และค่าของ <code>a.x</code> หลังใช้ <code>del a.x</code> ตามรูปแบบใน Testcase\n\n<b>Input</b><br>\ninteger 1 ค่า","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 9\nClass x : 1\nAfter del : 1\n===== End of program =====\n"},{"input":"25\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 25\nClass x : 1\nAfter del : 1\n===== End of program =====\n"}]},"23":{"prompt":"<b>โจทย์:</b> อธิบายบทบาทของ <code>self</code> ใน instance method ของ Python และอธิบายว่าทำไมการเรียก <code>a.f()</code> จึงสัมพันธ์กับการเรียก <code>A.f(a)</code> เมื่อ <code>a</code> เป็น object ของ class <code>A</code>","codeRequired":false,"testCases":[]},"24":{"prompt":"<b>โจทย์:</b> พิจารณาโค้ดต่อไปนี้\n\n<code>x = A()<br>y = x<br>y.value = 5<br>del x</code>\n\nหลังจากคำสั่ง <code>del x</code> แล้ว ยังสามารถอ่าน <code>y.value</code> ได้หรือไม่? อธิบายเหตุผลโดยเชื่อมโยงกับแนวคิดเรื่อง object และ reference","codeRequired":false,"testCases":[]},"25":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรม Python เพื่อแสดงว่า object แต่ละตัวสามารถมี property ของตนเองได้\n\nสร้าง class <code>Device</code> ที่มี class attribute <code>category = 'sensor'</code> จากนั้นสร้าง object <code>d1</code> และ <code>d2</code> รับชื่อของ object ทั้งสองจาก input แล้วเก็บไว้ใน property <code>name</code> ก่อนแสดงผลตามรูปแบบใน Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: ชื่อของ d1<br>\nบรรทัดที่ 2: ชื่อของ d2","codeRequired":true,"testCases":[{"input":"A\nB\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : A\nd2.name : B\n===== End of program =====\n"},{"input":"Temp\nPressure\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : Temp\nd2.name : Pressure\n===== End of program =====\n"}]}},"ชุด 2":{"21":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมเพื่อแสดงผลของการแก้ Class Attribute ผ่านชื่อ class\n\nกำหนด class <code>A</code> ให้มี class attribute <code>x = 1</code> และสร้าง object <code>a</code> กับ <code>b</code> รับ integer 1 ค่าแล้วนำไปกำหนดให้ <code>A.x</code> จากนั้นแสดงค่า <code>a.x</code>, <code>b.x</code> และ <code>A.x</code> ตามรูปแบบใน Testcase\n\n<b>Input</b><br>\ninteger 1 ค่า","codeRequired":true,"testCases":[{"input":"7\n","expected":"*** Class Attribute ***\na.x : 7\nb.x : 7\nA.x : 7\n===== End of program =====\n"},{"input":"100\n","expected":"*** Class Attribute ***\na.x : 100\nb.x : 100\nA.x : 100\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Class Attribute ***\na.x : -5\nb.x : -5\nA.x : -5\n===== End of program =====\n"}]},"22":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมเพื่อแสดงการเกิด Instance Shadowing\n\nกำหนด class <code>A</code> ให้มี class attribute <code>x = 1</code> แล้วสร้าง object <code>a</code> และ <code>b</code> รับ integer 1 ค่าและกำหนดให้ <code>a.x</code> จากนั้นแสดงค่า <code>a.x</code>, <code>b.x</code> และ <code>A.x</code> ตามรูปแบบใน Testcase\n\n<b>Input</b><br>\ninteger 1 ค่า","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Shadowing ***\na.x : 9\nb.x : 1\nA.x : 1\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Shadowing ***\na.x : -5\nb.x : 1\nA.x : 1\n===== End of program =====\n"}]},"23":{"prompt":"<b>โจทย์:</b> เขียน class <code>Box</code> สำหรับเก็บค่าหนึ่งค่า\n\nclass ต้องมี method <code>set_value(self, v)</code> สำหรับเปลี่ยนค่าของ object และ method <code>show(self)</code> สำหรับคืนค่าปัจจุบัน โปรแกรมรับ integer 2 ค่า แล้วเรียก <code>set_value()</code> และ <code>show()</code> ตามลำดับเพื่อแสดงผลตาม Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: integer ค่าแรก<br>\nบรรทัดที่ 2: integer ค่าที่สอง","codeRequired":true,"testCases":[{"input":"10\n25\n","expected":"*** Box Methods ***\nshow : 10\nshow : 25\n===== End of program =====\n"},{"input":"-3\n0\n","expected":"*** Box Methods ***\nshow : -3\nshow : 0\n===== End of program =====\n"}]},"24":{"prompt":"<b>โจทย์:</b> เปรียบเทียบความหมายและผลของคำสั่งต่อไปนี้\n\n<code>del obj.attr</code><br>\n<code>del obj</code>\n\nจากนั้นอธิบายเพิ่มเติมว่า หากมีตัวแปรอีกตัวหนึ่งอ้างถึง object เดียวกันอยู่ การใช้ <code>del obj</code> จะมีผลอย่างไรต่อ object นั้น","codeRequired":false,"testCases":[]},"25":{"prompt":"<b>โจทย์:</b> อธิบายขั้นตอนที่ Python ใช้ในการหาค่าของ <code>obj.x</code> เมื่อทั้ง object และ class อาจมี attribute ชื่อ <code>x</code> เหมือนกัน\n\nคำตอบควรอธิบายทั้งกรณีที่ object มี property <code>x</code> ของตัวเอง และกรณีที่ไม่มี property ดังกล่าว","codeRequired":false,"testCases":[]}},"ชุด 3":{"21":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมเพื่อแสดงว่า object สองตัวจาก class เดียวกันสามารถเก็บ state แยกจากกันได้\n\nสร้าง class <code>A</code> และ object <code>a</code> กับ <code>b</code> รับ integer 2 ค่า แล้วกำหนดให้ <code>a.value</code> และ <code>b.value</code> ตามลำดับ ก่อนแสดงผลตามรูปแบบใน Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: ค่า a.value<br>\nบรรทัดที่ 2: ค่า b.value","codeRequired":true,"testCases":[{"input":"1\n2\n","expected":"*** Object State ***\na.value : 1\nb.value : 2\n===== End of program =====\n"},{"input":"100\n-50\n","expected":"*** Object State ***\na.value : 100\nb.value : -50\n===== End of program =====\n"},{"input":"0\n0\n","expected":"*** Object State ***\na.value : 0\nb.value : 0\n===== End of program =====\n"}]},"22":{"prompt":"<b>โจทย์:</b> อธิบายลำดับการค้นหา attribute เมื่อโปรแกรมอ่าน <code>obj.x</code>\n\nให้พิจารณาทั้งกรณีที่ object มี property <code>x</code> ของตัวเอง และกรณีที่ object ไม่มี property ดังกล่าวแต่ class มี class attribute <code>x</code>","codeRequired":false,"testCases":[]},"23":{"prompt":"<b>โจทย์:</b> เขียน class <code>Score</code> ที่มีค่าเริ่มต้นร่วมกันเป็น 0\n\nกำหนด class attribute <code>value = 0</code> และสร้าง method <code>set(self, v)</code> กับ <code>show(self)</code> จากนั้นสร้าง object <code>s1</code> และ <code>s2</code> รับ integer 1 ค่าแล้วกำหนดให้ s1 เท่านั้น ก่อนแสดงผลตาม Testcase\n\n<b>Input</b><br>\ninteger 1 ค่า","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Score Class ***\ns1 : 9\ns2 : 0\n===== End of program =====\n"},{"input":"100\n","expected":"*** Score Class ***\ns1 : 100\ns2 : 0\n===== End of program =====\n"}]},"24":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมเพื่อแสดงว่า ตัวแปรสองชื่อสามารถอ้างถึง object เดียวกันได้\n\nสร้าง class <code>A</code>, กำหนด <code>a = A()</code> และ <code>b = a</code> รับ integer 1 ค่าแล้วเก็บไว้ใน <code>a.x</code> จากนั้นลบ property ผ่าน <code>del b.x</code> และแสดงผลตาม Testcase\n\n<b>Input</b><br>\ninteger 1 ค่า","codeRequired":true,"testCases":[{"input":"1\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"},{"input":"999\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"}]},"25":{"prompt":"<b>โจทย์:</b> เขียนโปรแกรมที่รวมแนวคิด Class Attribute, Method, Object Property และ Reference\n\nสร้าง class <code>Item</code> ที่มี class attribute <code>category = 'general'</code> และ method <code>show(self)</code> สำหรับคืนค่า <code>self.name</code> สร้าง object <code>i1</code>, <code>i2</code> และตัวแปร <code>ref</code> ที่อ้างถึง <code>i1</code> รับชื่อ 2 ค่าแล้วเก็บลงใน object ก่อนแสดงผลตามรูปแบบใน Testcase\n\n<b>Input</b><br>\nบรรทัดที่ 1: ชื่อของ i1<br>\nบรรทัดที่ 2: ชื่อของ i2","codeRequired":true,"testCases":[{"input":"A2\nB\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : A2\ni2.show() : B\nref is i1 : True\n===== End of program =====\n"},{"input":"Book\nPen\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : Book\ni2.show() : Pen\nref is i1 : True\n===== End of program =====\n"}]}}};

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
