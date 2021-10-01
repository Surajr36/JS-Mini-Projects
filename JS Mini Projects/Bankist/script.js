'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Computing usernames. Here username is just the initials(Using map and forEach)
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
function updateUI(acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

/////FORMATTING CURRENCIES
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
//Getting the movements to work using DOM Manipulation
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const now = new Date(acc.movementsDates[i]);
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    let displayDate;

    const daysPassed = calcDaysPassed(new Date(), now);
    // console.log(new Intl.DateTimeFormat(navigator.language).format(now));

    if (daysPassed === 0) displayDate = 'Today';
    else if (daysPassed === 1) displayDate = 'Yesterday';
    else if (daysPassed <= 7) displayDate = `${daysPassed} days ago`;
    else displayDate = new Intl.DateTimeFormat(mov.locale).format(now);

    // FOR CURRENCY
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Used to manipulate balance in main page using reduce method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// Calculating summary using chaining methods
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const expenses = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
  labelSumOut.textContent = formatCur(expenses, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1; //Accepts only interest greater than 1EUR
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

let currentAccount, timer;

const startLogOutTimer = function () {
  const tick = function () {
    labelTimer.textContent = `${String(Math.trunc(time / 60)).padStart(
      2,
      0
    )}: ${String(time % 60).padStart(2, 0)}`;

    //As soon as we reach 0, stop timer and log out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Logged out. Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  let time = 600;

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// //FAKING LOGIN SO THAT WE DON'T HAVE TO LOGIN. JUST FOR DEV PURPOSES
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

////////////////////////////////////////////////////////////////

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //To prevent reload when button is clicked as default behaviour of button in form is to reload
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //When pin is right,we gotta show UI, Welcome message,balance and summary
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clearing input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    ///////CREATING CURRENT DATE AND TIME
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    ///////////////////////////////////////

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  } else {
    alert('WRONG USERNAME OR PASSWORD');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer valid');
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    ///////ADDING TRANSFER DATE
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

//Use case of SOME Method
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  inputLoanAmount.value = '';

  setTimeout(function () {
    if (
      amount > 0 &&
      currentAccount.movements.some(mov => mov >= 0.1 * amount)
    ) {
      {
        currentAccount.movements.push(amount);

        currentAccount.movementsDates.push(new Date().toISOString());

        updateUI(currentAccount);

        clearInterval(timer);
        timer = startLogOutTimer();
      }
    } else alert('Loan denied bruhh');
  }, 3000);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete that account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  //Clearing fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
