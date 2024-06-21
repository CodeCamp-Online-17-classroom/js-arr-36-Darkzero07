// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

const dateFormat = (dateStr) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  return formatter.format(date);
};

const array2 = array.map(arr => `<tr><td>${arr.name}</td><td>${dateFormat(arr.birth).toLocaleLowerCase()}</td></tr>`)
console.log(array2)

// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]



