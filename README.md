# 🎬 Animation-utils

애니메이션 유틸 메서드

---

## 🫥 Element: fadeOut() method

서서히 사라지면서 해당 `Element` 요소를 제거합니다.

```javascript
Element.fadeOut(time [, options] [, checkState]);
```

```javascript
Element.fadeOut(time?: number | string,
options?: {easing?: string, delay?: number},
checkState?: boolean): Promise<Element | null>;
```

### #1 Demo
```javascript
// 사용 예시
import './fadeOut.js';

const modal = document.querySelector('.modal');

- modal.fadeOut();
- modal.fadeOut(0.5);
- modal.fadeOut(0.8, { easing: 'ease-in' });
- modal.fadeOut(1, { easing: 'ease-in-out', delay: 1 }, true);
```

<img src="./img/fadeOut_demo_1.gif" width="800px"/>

### #2 Demo
```javascript
// 사용 예시
import './fadeOut.js';

const boxes = Array.from(document.querySelectorAll('.box')).reverse();

boxes.forEach((el, i) => el.fadeOut(.6 * (i + 1), { easing: 'ease-in-out' }, true));
```

<img src="./img/fadeOut_demo_2.gif" width="700px"/>

---
