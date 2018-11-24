'use strict';

window.onload = () => {
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  let c = 2;

  const decode = e => e.replace(/[a-zA-Z3!]/g, (chr) => {
    const k = chr.charCodeAt(0) + 13;
    return String.fromCharCode(k > (chr <= 'Z' ? 90 : 122) ? k - 26 : k);
  }).replace(/(.)./g, '$1');

  const setupAnimations = () => {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const i1 = document.getElementById('i1');
    const i2 = document.getElementById('i2');
    const i3 = document.getElementById('i3');
    const c1 = document.getElementById('c1');
    const t1 = document.getElementById('t1');
    p1.style.display = 'inline-block';
    p2.style.display = 'inline-block';
    p3.style.display = 'inline-block';
    i1.style.display = 'inline-block';
    i2.style.display = 'inline-block';
    i3.style.display = 'inline-block';
    p1.className += ' animated slideInRight';
    p2.className += ' animated slideInRight';
    p3.className += ' animated slideInRight';
    i1.className += ' animated zoomInLeft';
    i2.className += ' animated zoomInDown';
    i3.className += ' animated zoomInRight';
    c1.className += ' animated slideInLeft';
    t1.className += ' animated rubberBand delay-1s';
    a.className += ' animated rotateIn delay-2s';
    b.className += ' animated zoomInRight';
  };

  const s = [
    'text-align:center;color:red;margin-block-start:0;',
    'text-align:center;color:black;margin-block-end:0;',
    'text-align:center;color:orange;margin-block-start:0;',
    'text-align:center;color:green;margin-block-start:0;',
  ];

  const t = [
    ':-)',
    'If you\'d like to contact me, please click twice on the happy face for my email.',
    'One More Click Please...*drum roll*',
    `You've done it! ${decode('u#r?y^y,b:3;q$g%e^b*l(!)v(a)s}b{')}`,
  ];

  const showIt = () => {
    c -= 1;
    if (c === 1) {
      a.style.cssText = s[3 - c];
      b.textContent = t[3 - c];
      return;
    }
    a.onclick = '';
    a.style.cssText = s[3 - c];
    b.textContent = t[3 - c];
  };

  [a.style.cssText] = s;
  [a.textContent] = t;
  b.style.cssText = s[3 - c];
  b.textContent = t[3 - c];

  a.onclick = showIt;

  document.getElementsByTagName('body')[0].style.visibility = 'visible';

  setupAnimations();
};
