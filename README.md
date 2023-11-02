## 🎬 ani-utils

애니메이션 유틸 메서드

---

### 🫥 fadeOut
서서히 사라지면서 해당 요소 제거
```javascript
HTMLElement.fadeOut(time [, options] [, checkState]);
```

```javascript
HTMLElement.fadeOut(time?: number | string,
options?: {easing?: string, delay?: number},
checkState?: boolean): Promise<HTMLElement | null>;
```
<br>

```javascript
// 사용 예시
- modal.fadeOut();
- modal.fadeOut(0.5);
- modal.fadeOut(0.8, { easing: 'ease-in' });
- modal.fadeOut(1, { easing: 'ease-in-out', delay: 1 }, true);
```






---
