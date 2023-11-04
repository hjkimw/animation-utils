/**
 *
 * @param {number | string} time - fadeOut 진행 시간
 * @param {{ease?: 'ease-in' | 'ease-out' | 'ease-in-out', delay?: number, checkState?: boolean}} options - fadeOut에 `ease`, `delay`, `checkState` 옵션 설정
 * @returns {Promise<Element | null>}
 */
Element.prototype.fadeOut = async function (time = 0.5, options = {}) {
  if (this.playState === 'running') return;

  const { ease: easing = 'ease-in', delay = 0, checkState = false } = options;

  typeof time === 'string' && !isNaN(+time) && (time = +time);

  let target = this.className || this.id || this.tagName;

  try {
    const ani = this.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: time * 1000,
      fill: 'both',
      easing: easing,
      delay: delay,
    });

    this.playState = ani.playState;
    checkState && console.log(`${target} is fadeOut ${this.playState}.. 🏃`);

    await ani.finished;

    this.playState = ani.playState;
    this.remove();
    checkState && console.log(`${target} is fadeOut ${this.playState}! ✅`);

    return this;
  } catch (error) {
    throw new Error(`Please enter the parameter value in the correct format..👀
           \n Current parameters => time: ${time}, options: ${JSON.stringify(options)}, checkState: ${checkState}`);
  }
};
