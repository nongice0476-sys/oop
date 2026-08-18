/* Exact stdin -> stdout judge. No hidden driver, no generated answer blocks. */
let exactResults={};
const EXACT_META={"ชุด 1":{"21":{"prompt":"<b>โจทย์:</b> ระบบทะเบียนนักศึกษาต้องเก็บข้อมูลมหาวิทยาลัยของนักศึกษา 2 คน\n\nจงเขียนโปรแกรม Python โดยใช้แนวคิด Class และ Object เพื่อรับชื่อมหาวิทยาลัยของนักศึกษาทั้งสองคน แล้วแสดงข้อมูลของนักศึกษาแต่ละคนตามรูปแบบที่กำหนด","codeRequired":true,"testCases":[{"input":"ABC\nKMITL\n","expected":"*** Student Class ***\ns1.university : ABC\ns2.university : KMITL\n===== End of program =====\n"},{"input":"KMITL\nKMITL\n","expected":"*** Student Class ***\ns1.university : KMITL\ns2.university : KMITL\n===== End of program =====\n"},{"input":"MIT\nStanford\n","expected":"*** Student Class ***\ns1.university : MIT\ns2.university : Stanford\n===== End of program =====\n"}]},"22":{"prompt":"<b>โจทย์:</b> โปรแกรมหนึ่งมีค่ามาตรฐานร่วมของทุก object เท่ากับ 1 แต่ต้องการอนุญาตให้ object บางตัวมีค่าของตนเองได้\n\nจงเขียนโปรแกรม Python เพื่อแสดงให้เห็นความแตกต่างระหว่างค่าที่เป็นของ class กับค่าที่เป็นของ object และแสดงผลหลังจากลบค่าของ object นั้นออก","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 9\nClass x : 1\nAfter del : 1\n===== End of program =====\n"},{"input":"25\n","expected":"*** Attribute Lookup ***\nBefore shadow : 1\nAfter shadow : 25\nClass x : 1\nAfter del : 1\n===== End of program =====\n"}]},"23":{"prompt":"อธิบายว่าทำไม <code>a.f()</code> จึงสัมพันธ์กับ <code>A.f(a)</code> เมื่อ <code>f(self)</code> เป็น method ใน class A พร้อมอธิบายบทบาทของ <code>self</code>","codeRequired":false,"testCases":[]},"24":{"prompt":"วิเคราะห์โค้ด <code>x=A(); y=x; y.value=5; del x</code> แล้วอธิบายว่า <code>y.value</code> ยังอ่านได้หรือไม่ และเพราะอะไร","codeRequired":false,"testCases":[]},"25":{"prompt":"<b>โจทย์:</b> ระบบตรวจวัดมีอุปกรณ์หลายตัวซึ่งอยู่ในประเภทเดียวกัน แต่แต่ละอุปกรณ์มีชื่อของตนเอง\n\nจงเขียนโปรแกรม Python โดยใช้ Class และ Object เพื่อรับชื่ออุปกรณ์ 2 ตัว เก็บข้อมูลของแต่ละ object และแสดงข้อมูลของอุปกรณ์ตามรูปแบบที่กำหนด","codeRequired":true,"testCases":[{"input":"A\nB\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : A\nd2.name : B\n===== End of program =====\n"},{"input":"Temp\nPressure\n","expected":"*** Device Objects ***\ncategory : sensor\nd1.name : Temp\nd2.name : Pressure\n===== End of program =====\n"}]}},"ชุด 2":{"21":{"prompt":"<b>โจทย์:</b> โปรแกรมกำหนดค่าร่วมเริ่มต้นให้ object ทุกตัวในระบบ และต้องการเปลี่ยนค่าร่วมนี้ในภายหลัง\n\nจงเขียนโปรแกรม Python เพื่อแสดงผลของการเปลี่ยนค่าร่วมของ class ที่มีต่อ object หลายตัวที่สร้างจาก class เดียวกัน","codeRequired":true,"testCases":[{"input":"7\n","expected":"*** Class Attribute ***\na.x : 7\nb.x : 7\nA.x : 7\n===== End of program =====\n"},{"input":"100\n","expected":"*** Class Attribute ***\na.x : 100\nb.x : 100\nA.x : 100\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Class Attribute ***\na.x : -5\nb.x : -5\nA.x : -5\n===== End of program =====\n"}]},"22":{"prompt":"<b>โจทย์:</b> object หนึ่งต้องการใช้ค่าของตนเองแทนค่าร่วมของ class ขณะที่ object อื่นยังคงใช้ค่าร่วมเดิม\n\nจงเขียนโปรแกรม Python เพื่อแสดงพฤติกรรมดังกล่าว และแสดงค่าของ object ทั้งสองรวมถึงค่าของ class","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Shadowing ***\na.x : 9\nb.x : 1\nA.x : 1\n===== End of program =====\n"},{"input":"-5\n","expected":"*** Shadowing ***\na.x : -5\nb.x : 1\nA.x : 1\n===== End of program =====\n"}]},"23":{"prompt":"<b>โจทย์:</b> ต้องการสร้างกล่องเก็บค่าที่สามารถเปลี่ยนค่าภายในและเรียกดูค่าปัจจุบันได้\n\nจงเขียน class Python สำหรับเก็บค่า 1 ค่า โปรแกรมรับจำนวนเต็ม 2 ค่า จากนั้นเปลี่ยนค่าภายในกล่องตามลำดับและแสดงค่าหลังการเปลี่ยนแต่ละครั้ง","codeRequired":true,"testCases":[{"input":"10\n25\n","expected":"*** Box Methods ***\nshow : 10\nshow : 25\n===== End of program =====\n"},{"input":"-3\n0\n","expected":"*** Box Methods ***\nshow : -3\nshow : 0\n===== End of program =====\n"}]},"24":{"prompt":"เปรียบเทียบผลของ <code>del obj.attr</code>, <code>del obj</code>, และกรณีที่มีอีก reference หนึ่งชี้ object เดียวกัน","codeRequired":false,"testCases":[]},"25":{"prompt":"วิเคราะห์และเขียน output ทีละบรรทัดของโปรแกรมที่มี class attribute, object 2 ตัว, alias 1 ตัว, การ shadow attribute และการ del attribute โดยอธิบายเหตุผลของแต่ละบรรทัด","codeRequired":false,"testCases":[]}},"ชุด 3":{"21":{"prompt":"<b>โจทย์:</b> ระบบต้องเก็บค่าของข้อมูล 2 รายการแยกจากกัน แม้ว่าข้อมูลทั้งสองจะสร้างจากโครงสร้างเดียวกัน\n\nจงเขียนโปรแกรม Python โดยใช้ Class และ Object เพื่อรับจำนวนเต็ม 2 ค่า เก็บไว้ใน object คนละตัว และแสดงผลเพื่อยืนยันว่าแต่ละ object มี state ของตนเอง","codeRequired":true,"testCases":[{"input":"1\n2\n","expected":"*** Object State ***\na.value : 1\nb.value : 2\n===== End of program =====\n"},{"input":"100\n-50\n","expected":"*** Object State ***\na.value : 100\nb.value : -50\n===== End of program =====\n"},{"input":"0\n0\n","expected":"*** Object State ***\na.value : 0\nb.value : 0\n===== End of program =====\n"}]},"22":{"prompt":"อธิบายลำดับแนวคิดการหา <code>obj.x</code> ในกรณีที่ทั้ง object และ class อาจมี x โดยไม่ต้องใช้ศัพท์ภายใน Python ที่เกินบท","codeRequired":false,"testCases":[]},"23":{"prompt":"<b>โจทย์:</b> ระบบคะแนนกำหนดค่าเริ่มต้นเป็น 0 ให้ทุก object แต่เมื่อมีการเปลี่ยนคะแนนของ object หนึ่ง จะต้องไม่ทำให้ object อื่นเปลี่ยนตาม\n\nจงเขียนโปรแกรม Python เพื่อจำลองระบบดังกล่าว รับคะแนน 1 ค่า แล้วแสดงค่าของ object ทั้งสองหลังการเปลี่ยนแปลง","codeRequired":true,"testCases":[{"input":"9\n","expected":"*** Score Class ***\ns1 : 9\ns2 : 0\n===== End of program =====\n"},{"input":"100\n","expected":"*** Score Class ***\ns1 : 100\ns2 : 0\n===== End of program =====\n"}]},"24":{"prompt":"<b>โจทย์:</b> ในโปรแกรมมีตัวแปร 2 ชื่อที่อ้างถึง object เดียวกัน\n\nจงเขียนโปรแกรม Python เพื่อแสดงว่าเมื่อ property ของ object ถูกลบผ่านตัวแปรชื่อหนึ่ง ผลที่เกิดขึ้นสามารถสังเกตได้ผ่านตัวแปรอีกชื่อหนึ่ง","codeRequired":true,"testCases":[{"input":"1\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"},{"input":"999\n","expected":"*** Object Alias ***\na is b : True\na has x : False\n===== End of program =====\n"}]},"25":{"prompt":"<b>โจทย์:</b> ระบบสินค้าเก็บข้อมูลสินค้าหลายรายการซึ่งอยู่ในหมวดหมู่เดียวกัน แต่แต่ละสินค้ามีชื่อของตนเอง\n\nจงเขียนโปรแกรม Python ที่ใช้ Class Attribute, Method, Object Property และ Reference เพื่อจัดเก็บชื่อสินค้า 2 รายการ และแสดงข้อมูลตามรูปแบบที่กำหนด","codeRequired":true,"testCases":[{"input":"A2\nB\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : A2\ni2.show() : B\nref is i1 : True\n===== End of program =====\n"},{"input":"Book\nPen\n","expected":"*** Item Class ***\ncategory : general\ni1.show() : Book\ni2.show() : Pen\nref is i1 : True\n===== End of program =====\n"}]}}};

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
  return `<div style="margin-top:14px;color:var(--muted);font-size:13px">Testcase ด้านล่างเป็นส่วนของระบบตรวจ ไม่ใช่ส่วนของโจทย์</div><div class="sample-tests">
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
