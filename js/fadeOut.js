/**
 *
 * @param {number | string} time - fadeOut 진행 시간
 * @param {{easing?: string, delay?: number}} options - fadeOut에 easing, delay 추가 애니메이션 옵션 설정
 * @param {boolean} checkState - fadeOut 진행 상태 로그 출력 on/off
 * @returns {Promise<Element | null>}
 */
Element.prototype.fadeOut = async function (time = 0.5, options = {}, checkState = false) {
  if (this.playState === 'running') return;

  typeof time === 'string' && !isNaN(+time) && (time = +time);

  let target = this.className || this.id || this.tagName;

  try {
    const ani = this.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: time * 1000,
      fill: 'both',
      ...options,
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
