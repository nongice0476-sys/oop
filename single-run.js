/* Single-run black-box testcase grading */
const CLEAR_PROMPTS={
'ชุด 1':{21:'เขียนโปรแกรม Python โดยสร้าง class Student ที่มี class attribute university = \'KMITL\' และ method show(self) ที่คืนค่ามหาวิทยาลัยของ object จากนั้นสร้าง s1, s2 และกำหนด s1.university = \'ABC\'. เป้าหมายคือให้ผลลัพธ์ตรงกับ Testcases ทุกเคส ไม่จำกัดวิธีเขียนภายใน',22:'เขียนโปรแกรม Python เพื่อสาธิต class attribute กับ object property โดยใช้ class A ที่มี x = 1 และแสดงพฤติกรรมก่อน shadow, หลัง shadow และหลัง del object property. ระบบตรวจเฉพาะผลลัพธ์ตาม Testcases',25:'เขียนโปรแกรม Python ที่ใช้ class Device และ object อย่างน้อย 2 ตัว เพื่อแสดง class attribute, object property, การแก้ property และการลบ property โดยให้ output ตรงกับ Testcases'},
'ชุด 2':{21:'เขียนโปรแกรม Python ที่แสดงว่าเมื่อแก้ class attribute ผ่านชื่อ class แล้ว objects ที่ยังไม่ได้ shadow attribute นั้นจะเห็นค่าที่เปลี่ยนไป โดยให้ output ตรงกับ Testcases',22:'เขียนโปรแกรม Python ที่แสดง instance shadowing: object หนึ่งมี property ชื่อเดียวกับ class attribute แต่อีก object ยังอ่านค่าจาก class โดยให้ output ตรงกับ Testcases',23:'เขียนโปรแกรม Python ที่มี class Box สำหรับเก็บค่า มี method สำหรับกำหนดค่าและคืนค่าปัจจุบันของ object โดยให้ output ตรงกับ Testcases'},
'ชุด 3':{21:'เขียนโปรแกรม Python ที่สร้าง object 2 ตัวจาก class เดียวกัน และแสดงว่าแต่ละ object เก็บ property ของตนเองแยกกันได้ โดยให้ output ตรงกับ Testcases',23:'เขียนโปรแกรม Python ที่มี class Score ค่าเริ่มต้นร่วมเป็น 0 และสามารถเปลี่ยนค่าของ object แต่ละตัวแยกกันได้ โดยให้ output ตรงกับ Testcases',24:'เขียนโปรแกรม Python เพื่อแสดงว่าเมื่อมีตัวแปร 2 ชื่ออ้างถึง object เดียวกัน การลบ property ผ่านชื่อหนึ่งจะสะท้อนกับอีกชื่อหนึ่ง โดยให้ output ตรงกับ Testcases',25:'เขียนโปรแกรม Python ที่รวม class attribute, method, objects หลายตัว, modify property, delete property และ alias/reference โดยให้ output ตรงกับ Testcases'}
};
for(const [sn,items] of Object.entries(CLEAR_PROMPTS))for(const [id,p] of Object.entries(items)){const q=DATA[sn].written.find(x=>x.id===+id);if(q)q.prompt=p+'<br><br><b>เกณฑ์ตรวจ:</b> ไม่สนวิธีเขียนหรือโครงสร้างภายใน ตัดสินจากผลลัพธ์ของ Testcases เท่านั้น';}

samplePanel=function(q){
 if(!q.codeRequired)return '';
 const rs=testResults[q.id]||[];
 return `<div class="sample-tests"><div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap"><h3 style="margin:0">Testcases</h3><button class="sample-run-all" data-single-run="${q.id}">▶ Run</button></div>${q.testCases.map((t,i)=>{const r=rs[i],state=!r?'':r.pass?' pass':' fail';return `<div class="sample-case${state}"><div class="sample-title">Testcase : #${i+1}${r?` <span class="${r.pass?'sample-ok':'sample-ng'}">${r.pass?'✓ PASS':'✗ FAIL'}</span>`:''}</div><pre class="sample-terminal">${esc(t.expected)}</pre>${r?`<details open><summary>Actual output</summary><pre class="sample-terminal sample-actual">${esc(r.actual||'')}</pre>${r.error?`<div class="sample-ng">${esc(r.error)}</div>`:''}</details>`:''}</div>`}).join('')}<div style="color:var(--muted);font-size:12px">กด Run ครั้งเดียว ระบบจะรันทุก Testcase แล้วเช็คทีละเคสอัตโนมัติ</div></div>`;
};

const __bind=bind;
bind=function(){
 __bind();
 document.querySelectorAll('[data-single-run]').forEach(b=>b.onclick=()=>runSampleAll(+b.dataset.singleRun,b));
};

const __submit=$('#submit').onclick;
$('#submit').onclick=()=>{
 if(!submitted){if(!confirm('ส่งข้อสอบและเปิดเฉลยหรือไม่?'))return;submitted=true;localStorage.setItem(key('sub'),'1');render();}
 const c=DATA[setName].mcq.reduce((s,q)=>s+(ans[q.id]===q.answer),0),m=Math.round(c/20*100);
 const codeQs=DATA[setName].written.filter(q=>q.codeRequired);
 const tc=codeQs.length?Math.round(codeQs.reduce((s,q)=>s+(((testResults[q.id]||[]).filter(x=>x&&x.pass).length/q.testCases.length)*100),0)/codeQs.length):100;
 const gs=DATA[setName].written.map(q=>grade(q,wa[q.id])),exp=Math.round(gs.reduce((a,g)=>a+g.score,0)/gs.length);
 $('#score').innerHTML=`<h2>${setName}</h2><p><b>ปรนัย:</b> ${c}/20 (${m}%)</p><p><b>Programming:</b> ${tc}% <small>(Testcases เท่านั้น)</small></p><p><b>คำอธิบาย:</b> ${exp}% <small>(ประเมินแยก)</small></p><div class="solution"><b>เกณฑ์โค้ด:</b> ไม่สนว่าเขียนอย่างไร ขอเพียง output ตรง Testcases</div>`;scoreDlg.showModal();
};