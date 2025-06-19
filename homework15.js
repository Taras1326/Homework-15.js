
// Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.

                  // варіант 1

const users = [
  { name: "Nazar", balance: 3200 },
  { name: "Ivan", balance: 4100 },
  { name: "Vadim", balance: 5700 },
  { name: "Taras", balance: 5100 },
  { name: "Miroslav", balance: 2816 },
];


const calculateTotalBalance = users => users.reduce((total, item) => total + item.balance, 0);
console.log(calculateTotalBalance(users));  // 20916



              // варіант 2


// const calculateTotalBalancee = users => {
//   return users.reduce((totals, user) => totals + user.balance, 0);
// };

// console.log(calculateTotalBalancee(users)); // 20916



// Завдання 2

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const user = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  { name: "Sheree Anthony", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh"] }
];


const getUsersWithFriend = (user, friendName) => user.filter((item) => item.friends.includes(friendName)).map((item)=>item.name)
;

console.log(getUsersWithFriend(user, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(user, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]





// Завдання 3

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)


const userss = [
  { name: "Moore Hensley", friends: [] },
  { name: "Sharlene Bush", friends: ["A"] },
  { name: "Elma Head", friends: ["A", "B"] },
  { name: "Carey Barr", friends: ["A", "B", "C"] },
  { name: "Blackburn Dotson", friends: ["A", "B", "C", "D"] },
  { name: "Sheree Anthony", friends: ["A", "B", "C", "D", "E"] },
  { name: "Ross Vazquez", friends: ["A", "B", "C", "D", "E", "F"] }
];



// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = userss => {
  return userss.sort((a, b)=> a.friends.length - b.friends.length).map((item)=>item.name)
};

console.log(getNamesSortedByFriendsCount(userss));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]




// Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills), 
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const userse = [
  { name: "User1", skills: ["html", "css", "js", "react"] },
  { name: "User2", skills: ["node", "css", "react", "js"] },
  { name: "User3", skills: ["js", "typescript", "node", "css"] }
];

const getSortedUniqueSkills = users4 => users4.flatMap(users4 => users4.skills).filter((skill, i, arr) => arr.indexOf(skill) === i).sort();
  
  console.log(getSortedUniqueSkills(userse));
  // ['adipisicing', 'amet', 'anim', ..., 'veniam']
  



