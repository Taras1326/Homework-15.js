
// Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users =>
  users.reduce((total, { balance }) => total + balance, 0);

console.log(calculateTotalBalance(users)); // 20916





// Завдання 2

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.



const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // ['Sharlene Bush', 'Sheree Anthony']
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // ['Elma Head', 'Sheree Anthony']



// Завдання 3

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)


const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']




// Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills), 
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.


const getSortedUniqueSkills = users => {
    const allSkills = users.flatMap(({ skills }) => skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills.sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // ['adipisicing', 'amet', 'anim', ..., 'veniam']
  



