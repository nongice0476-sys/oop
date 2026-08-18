/* Reduce over-hinting in Programming question conditions. */
const CONDITION_PATCH = {"ชุด 1":{"21":["ต้องใช้แนวคิด Class และ Object","ข้อมูลมหาวิทยาลัยของนักศึกษาแต่ละคนต้องเก็บแยกจากกันในแต่ละ Object"],"22":["ต้องมีข้อมูลร่วมระดับ Class และข้อมูลเฉพาะของ Object ที่ใช้ชื่อเดียวกัน","ต้องแสดงผลก่อนและหลังการลบข้อมูลเฉพาะของ Object"],"25":["ข้อมูลประเภทของอุปกรณ์เป็นข้อมูลร่วมของ Class","ชื่ออุปกรณ์เป็นข้อมูลเฉพาะของแต่ละ Object"]},"ชุด 2":{"21":["ต้องใช้ข้อมูลร่วมระดับ Class","การเปลี่ยนค่าร่วมต้องสามารถสังเกตผลผ่าน Object ที่สร้างจาก Class เดียวกันได้"],"22":["ต้องมีข้อมูลร่วมระดับ Class และข้อมูลเฉพาะของ Object ที่ใช้ชื่อเดียวกัน","Object อย่างน้อยหนึ่งตัวต้องยังคงอ่านค่าร่วมจาก Class"],"23":["ต้องใช้ Class และ Object","Object ต้องสามารถเปลี่ยนและเรียกดูค่าที่เก็บอยู่ได้ผ่าน Method"]},"ชุด 3":{"21":["ต้องใช้ Class และ Object","Object แต่ละตัวต้องเก็บ State ของตนเองแยกจากกัน"],"23":["ค่าเริ่มต้นเป็นข้อมูลร่วมระดับ Class","การเปลี่ยนค่าของ Object หนึ่งต้องไม่ทำให้ Object อื่นเปลี่ยนตาม"],"24":["ต้องมีตัวแปรมากกว่าหนึ่งชื่ออ้างถึง Object เดียวกัน","ต้องแสดงผลของการลบข้อมูลเฉพาะของ Object ผ่าน Reference หนึ่ง"],"25":["ข้อมูลหมวดหมู่เป็นข้อมูลร่วมระดับ Class","ชื่อสินค้าเป็นข้อมูลเฉพาะของแต่ละ Object","ต้องมีการใช้ Method และ Reference ในการทำงานของโปรแกรม"]}};

for (const [setName, items] of Object.entries(CONDITION_PATCH)) {
  for (const [id, list] of Object.entries(items)) {
    const q = DATA[setName]?.written?.find(x => x.id === Number(id));
    if (!q || !q.prompt) continue;
    const html = list.map((text, i) => `${i + 1}. ${text}`).join('<br>');
    q.prompt = q.prompt.replace(
      /(<b>เงื่อนไข<\/b><br>)(.*?)(<br><br>\s*<b>แนวคิดที่ใช้<\/b>)/s,
      (_, a, _old, b) => a + html + b
    );
  }
}
