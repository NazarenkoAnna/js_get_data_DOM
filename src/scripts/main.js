'use strict';

const spanArr = document.querySelectorAll('.population');
const totalResult = document.querySelector('.total-population');
const avarageResult = document.querySelector('.average-population');
const population = [...spanArr];

const totalArr = population.map((el) =>
  Number(el.textContent.replaceAll(',', '')),
);
const total = totalArr.reduce((sum, el) => sum + el, 0);

totalResult.textContent = total.toLocaleString();

avarageResult.textContent = Math.round(
  total / totalArr.length,
).toLocaleString();
