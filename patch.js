/* OOP exam patch: test cases + repeatable runner */
let testResults={};
const TEST_META={"ชุด 1":{"21":{"codeRequired":true,"testCases":[{"name":"สร้าง Student, s1, s2","code":"assert 'Student' in ns and isinstance(ns['Student'],type)\nassert 's1' in ns and 's2' in ns\nassert isinstance(ns['s1'],ns['Student']) and isinstance(ns['s2'],ns['Student'])","description":"ต้องสร้าง class Student และ objects s1, s2"},{"name":"Class attribute ถูกต้อง","code":"assert getattr(ns['Student'],'university',None)=='KMITL'","description":"Student.university ต้องเป็น KMITL"},{"name":"show() ให้ผลถูกต้อง","code":"assert callable(getattr(ns['Student'],'show',None))\nassert ns['s1'].show()=='ABC'\nassert ns['s2'].show()=='KMITL'","description":"s1.show() ต้องเป็น ABC และ s2.show() ต้องเป็น KMITL"}]},"22":{"codeRequired":true,"testCases":[{"name":"มี class attribute","code":"assert ns['__ast_has_class_attr__']","description":"ต้องมี class attribute"},{"name":"มี instance shadowing","code":"assert ns['__ast_has_instance_assign__']","description":"ต้องมี object.property = value"},{"name":"มี del object.property","code":"assert ns['__ast_has_del_attr__']","description":"ต้องมีการลบ property ด้วย del"}]},"23":{"codeRequired":false,"testCases":[]},"24":{"codeRequired":false,"testCases":[]},"25":{"codeRequired":true,"testCases":[{"name":"มี class","code":"assert ns['__ast_class_count__']>=1","description":"ต้องมี class"},{"name":"สร้างอย่างน้อย 2 objects","code":"assert ns['__ast_constructor_calls__']>=2","description":"ต้องสร้างอย่างน้อย 2 objects"},{"name":"มี class attribute","code":"assert ns['__ast_has_class_attr__']","description":"ต้องมี class attribute"},{"name":"เพิ่ม/แก้ object property","code":"assert ns['__ast_has_instance_assign__']","description":"ต้องมี object.property assignment"},{"name":"ลบ object property","code":"assert ns['__ast_has_del_attr__']","description":"ต้องมี del object.property"}]}},"ชุด 2":{"21":{"codeRequired":true,"testCases":[{"name":"มี class attribute","code":"assert ns['__ast_has_class_attr__']","description":"ต้องมี class attribute"},{"name":"มีอย่างน้อย 2 objects","code":"assert ns['__ast_constructor_calls__']>=2","description":"ต้องสร้าง 2 objects"},{"name":"แก้ class attribute ผ่านชื่อ class","code":"assert ns['__ast_has_class_attr_reassign__']","description":"ต้องมี ClassName.attr = value"}]},"22":{"codeRequired":true,"testCases":[{"name":"มี class attribute","code":"assert ns['__ast_has_class_attr__']","description":"ต้องมี class attribute"},{"name":"มี shadowing ที่ object","code":"assert ns['__ast_has_instance_assign__']","description":"ต้องมี object.attr = value"},{"name":"สร้างอย่างน้อย 2 objects","code":"assert ns['__ast_constructor_calls__']>=2","description":"ต้องมีอย่างน้อย 2 objects"}]},"23":{"codeRequired":true,"testCases":[{"name":"มี method อย่างน้อย 2 ตัว","code":"assert ns['__ast_method_count__']>=2","description":"ต้องมี method อย่างน้อย 2 methods"},{"name":"มี self.property assignment","code":"assert ns['__ast_self_attr_assign__']","description":"ต้องมี self.property = ..."},{"name":"มีการอ่าน self.property","code":"assert ns['__ast_self_attr_read__']","description":"ต้องอ่าน self.property ใน method"}]},"24":{"codeRequired":false,"testCases":[]},"25":{"codeRequired":false,"testCases":[]}},"ชุด 3":{"21":{"codeRequired":true,"testCases":[{"name":"สร้างอย่างน้อย 2 objects","code":"assert ns['__ast_constructor_calls__']>=2","description":"ต้องสร้างสอง objects"},{"name":"มี object property assignments อย่างน้อย 2 ครั้ง","code":"assert ns['__ast_instance_attr_assign_count__']>=2","description":"ต้องมีการกำหนด property ของ objects อย่างน้อย 2 ครั้ง"}]},"22":{"codeRequired":false,"testCases":[]},"23":{"codeRequired":true,"testCases":[{"name":"มี class Score","code":"assert 'Score' in ns and isinstance(ns['Score'],type)","description":"ต้องสร้าง class Score"},{"name":"value=0","code":"assert getattr(ns['Score'],'value',None)==0","description":"Score.value ต้องเป็น 0"},{"name":"มี set และ show","code":"assert callable(getattr(ns['Score'],'set',None)) and callable(getattr(ns['Score'],'show',None))","description":"ต้องมี methods set และ show"},{"name":"Behavior ถูกต้อง","code":"a=ns['Score'](); b=ns['Score'](); a.set(7); assert a.show()==7; assert b.show()==0","description":"set เฉพาะ a ต้องไม่ทำให้ b เปลี่ยนจาก default"}]},"24":{"codeRequired":true,"testCases":[{"name":"มี alias","code":"assert ns['__ast_has_alias_assign__']","description":"ต้องมี b=a หรือรูปแบบ alias ที่เทียบเคียง"},{"name":"มี del property","code":"assert ns['__ast_has_del_attr__']","description":"ต้องมี del object.property"}]},"25":{"codeRequired":true,"testCases":[{"name":"10–15 บรรทัด","code":"assert 10 <= ns['__line_count__'] <= 15","description":"โค้ดที่มีเนื้อหาประมาณ 10–15 บรรทัด"},{"name":"มี class attribute","code":"assert ns['__ast_has_class_attr__']","description":"ต้องมี class attribute"},{"name":"สร้าง 2 objects","code":"assert ns['__ast_constructor_calls__']>=2","description":"ต้องมีอย่างน้อยสอง object constructions"},{"name":"มี method","code":"assert ns['__ast_method_count__']>=1","description":"ต้องมี method"},{"name":"มี modify property","code":"assert ns['__ast_has_instance_assign__']","description":"ต้องมี object.property assignment"},{"name":"มี del property","code":"assert ns['__ast_has_del_attr__']","description":"ต้องมี del object.property"},{"name":"มี del object reference","code":"assert ns['__ast_has_del_name__']","description":"ต้องมี del ชื่อตัวแปร object"}]}}};

for(const [sn,items] of Object.entries(TEST_META)){
  for(const q of DATA[sn].written){
    const m=items[String(q.id)]||{codeRequired:false,testCases:[]};
    q.codeRequired=!!m.codeRequired;
    q.testCases=m.testCases||[];
  }
}

const _baseLoad=load;
load=function(){
  _baseLoad();
  try{testResults=JSON.parse(localStorage.getItem(key('tests'))||'{}')}catch{testResults={}}
};
const _baseSave=save;
save=function(){
  _baseSave();
  localStorage.setItem(key('tests'),JSON.stringify(testResults));
};

function testRows(q){
  const rs=testResults[q.id]||[];
  return (q.testCases||[]).map((t,i)=>{
    const r=rs[i], cls=!r?'test-wait':r.pass?'test-pass':'test-fail', sym=!r?'○':r.pass?'✓':'✗';
    const err=r&&!r.pass?`<div class="test-fail" style="font-size:13px">${esc(r.error||'ไม่ผ่าน')}</div>`:'';
    return `<div class="test-row"><span class="${cls}"><b>${sym}</b></span><div><b>${t.name}</b><div style="color:var(--muted);font-size:13px">${t.description}</div>${err}</div></div>`;
  }).join('');
}

function testPanel(q){
  if(!q.codeRequired)return '';
  const out=runOutputs[q.id]||'';
  return `<div class="test-panel"><b>Test Runner</b>${testRows(q)}
    <div><button class="run-code" data-run-code="${q.id}">▶ Run Code</button>
    <button class="run-tests" data-run-tests="${q.id}">🧪 Run Test Cases</button></div>
    <div class="run-output">${out?esc(out):'Output จะแสดงที่นี่ — Run Code / Run Test Cases ได้ตลอด'}</div>
    <div style="color:var(--muted);font-size:12px;margin-top:8px">ตรวจ Syntax ก่อน • รัน Python จริงผ่าน Pyodide • รันซ้ำได้ไม่จำกัด</div>
  </div>`;
}

wr=function(q){
  const g=submitted?grade(q,wa[q.id]):null;
  const rs=testResults[q.id]||[];
  const passed=q.codeRequired?(q.testCases||[]).filter((_,i)=>rs[i]&&rs[i].pass).length:0;
  const pct=q.codeRequired&&q.testCases.length?Math.round(passed/q.testCases.length*100):0;
  return `<section class="card" id="q${q.id}">
    <div class="qhead"><b>ข้อ ${q.id}</b><span>${q.topic} · ${q.difficulty}</span></div>
    <div class="written-question"><span class="label">โจทย์</span><div class="prompt">${q.prompt}</div></div>
    <div style="margin-top:12px"><b>พื้นที่ลองรัน Python</b>
      <textarea class="code-editor" data-code-id="${q.id}" placeholder="# เขียน/ทดลองโค้ด Python ที่นี่...">${codeAns[q.id]||''}</textarea>
      ${q.codeRequired?testPanel(q):`<div><button class="run-code" data-run-code="${q.id}">▶ Run Code</button></div><div class="run-output">${runOutputs[q.id]?esc(runOutputs[q.id]):'Output จะแสดงที่นี่ — กด Run Code ได้ตลอด'}</div>`}
    </div>
    <div style="margin-top:12px"><b>คำตอบ / คำอธิบาย</b>
      <textarea data-exp-id="${q.id}" ${submitted?'readonly':''} placeholder="อธิบายด้วยคำของคุณเอง...">${wa[q.id]||''}</textarea>
    </div>
    ${submitted?`${q.codeRequired?`<div class="grade"><b>Test Cases: ${pct}%</b><div>${passed}/${q.testCases.length} passed</div></div>`:''}${badge(g)}<div class="solution"><b>แนวคำตอบ</b><br>${q.solution}</div>`:''}
  </section>`;
};

bind=function(){
  document.querySelectorAll('input[type=radio]').forEach(x=>x.onchange=()=>{ans[+x.name.slice(1)]=+x.value;save();prog();nav()});
  document.querySelectorAll('[data-exp-id]').forEach(x=>x.oninput=()=>{wa[+x.dataset.expId]=x.value;save();prog();nav()});
  document.querySelectorAll('[data-code-id]').forEach(x=>x.oninput=()=>{
    const id=+x.dataset.codeId;
    codeAns[id]=x.value;runOutputs[id]='';testResults[id]=[];save();prog();nav()
  });
  document.querySelectorAll('[data-run-code]').forEach(b=>b.onclick=()=>runCode(+b.dataset.runCode,b));
  document.querySelectorAll('[data-run-tests]').forEach(b=>b.onclick=()=>runTests(+b.dataset.runTests,b));
};

const AST_HELPER=`import ast
tree=ast.parse(USER_CODE)
__ast_class_count__=sum(isinstance(n,ast.ClassDef) for n in ast.walk(tree))
class_names={n.name for n in ast.walk(tree) if isinstance(n,ast.ClassDef)}
__ast_constructor_calls__=sum(isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id in class_names for n in ast.walk(tree))
__ast_method_count__=sum(len([x for x in n.body if isinstance(x,(ast.FunctionDef,ast.AsyncFunctionDef))]) for n in ast.walk(tree) if isinstance(n,ast.ClassDef))
__ast_has_class_attr__=any(isinstance(x,(ast.Assign,ast.AnnAssign)) for n in ast.walk(tree) if isinstance(n,ast.ClassDef) for x in n.body if not isinstance(x,(ast.FunctionDef,ast.AsyncFunctionDef)))
__ast_has_instance_assign__=any(isinstance(n,(ast.Assign,ast.AnnAssign)) and any(isinstance(t,ast.Attribute) for t in (n.targets if isinstance(n,ast.Assign) else [n.target])) for n in ast.walk(tree))
__ast_instance_attr_assign_count__=sum(1 for n in ast.walk(tree) if isinstance(n,(ast.Assign,ast.AnnAssign)) and any(isinstance(t,ast.Attribute) for t in (n.targets if isinstance(n,ast.Assign) else [n.target])))
__ast_has_del_attr__=any(isinstance(n,ast.Delete) and any(isinstance(t,ast.Attribute) for t in n.targets) for n in ast.walk(tree))
__ast_has_del_name__=any(isinstance(n,ast.Delete) and any(isinstance(t,ast.Name) for t in n.targets) for n in ast.walk(tree))
__ast_has_alias_assign__=any(isinstance(n,ast.Assign) and len(n.targets)==1 and isinstance(n.targets[0],ast.Name) and isinstance(n.value,ast.Name) for n in ast.walk(tree))
__ast_has_class_attr_reassign__=any(isinstance(n,ast.Assign) and any(isinstance(t,ast.Attribute) and isinstance(t.value,ast.Name) and t.value.id in class_names for t in n.targets) for n in ast.walk(tree))
__ast_self_attr_assign__=any(isinstance(n,ast.Assign) and any(isinstance(t,ast.Attribute) and isinstance(t.value,ast.Name) and t.value.id=='self' for t in n.targets) for n in ast.walk(tree))
__ast_self_attr_read__=any(isinstance(n,ast.Attribute) and isinstance(n.value,ast.Name) and n.value.id=='self' and isinstance(n.ctx,ast.Load) for n in ast.walk(tree))
__line_count__=len([ln for ln in USER_CODE.splitlines() if ln.strip() and not ln.lstrip().startswith('#')])`;

async function runTests(id,btn){
  const q=DATA[setName].written.find(x=>x.id===id), code=codeAns[id]||'';
  if(!code.trim()){runOutputs[id]='ยังไม่มีโค้ดให้ทดสอบ';save();render();return}
  const bad=unsafe(code);if(bad){runOutputs[id]=bad;save();render();return}
  const old=btn.textContent;
  try{
    const py=await ensurePyodide(btn);btn.textContent='กำลังรัน tests...';btn.disabled=true;
    py.globals.set('USER_CODE',code);
    try{await py.runPythonAsync("compile(USER_CODE, '<student>', 'exec')")}
    catch(e){
      testResults[id]=q.testCases.map(()=>({pass:false,error:'SyntaxError: '+String(e).split('\n').slice(-2).join(' ')}));
      runOutputs[id]='Syntax Error';save();render();return;
    }
    let rs=[];
    for(const t of q.testCases){
      try{
        py.globals.set('TEST_CODE',t.code);
        await py.runPythonAsync(`ns={}
${AST_HELPER}
exec(USER_CODE, ns)
for _k in list(globals()):
    if _k.startswith('__ast_') or _k=='__line_count__':
        ns[_k]=globals()[_k]
ns['ns']=ns
exec(TEST_CODE,ns)`);
        rs.push({pass:true});
      }catch(e){rs.push({pass:false,error:String(e).split('\n').slice(-2).join(' ')})}
    }
    testResults[id]=rs;
    runOutputs[id]=`Test Cases: ${rs.filter(x=>x.pass).length}/${rs.length} passed`;
    save();render();
  }catch(e){runOutputs[id]='Runner Error: '+String(e);save();render()}
  finally{btn.disabled=false;btn.textContent=old}
}

const _baseReset=$('#reset').onclick;
$('#reset').onclick=()=>{localStorage.removeItem(key('tests'));testResults={};_baseReset()};

const _baseSubmit=$('#submit').onclick;
$('#submit').onclick=()=>{
  if(!submitted){
    const pending=DATA[setName].written.filter(q=>q.codeRequired&&(codeAns[q.id]||'').trim()&&(testResults[q.id]||[]).length!==q.testCases.length);
    if(pending.length&&!confirm(`ข้อ ${pending.map(q=>q.id).join(', ')} ยังไม่ได้รัน Test Cases ครบ ต้องการส่งต่อหรือไม่?`))return;
  }
  _baseSubmit();
};
