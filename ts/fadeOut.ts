interface FadeOutOptions {
  ease: 'ease-in' | 'ease-out' | 'ease-in-out';
  delay: number;
  checkState: boolean;
}

declare global {
  interface HTMLElement {
    fadeOut: (time?: number | string, options?: Partial<FadeOutOptions>) => Promise<Element | null>;
    playState?: AnimationPlayState;
  }
}

HTMLElement.prototype.fadeOut = async function (
  time: number | string = 0.5,
  options: Partial<FadeOutOptions> = {}
): Promise<Element | null> {
  if (this.playState === 'running') return null;

  const { ease: easing = 'ease-in', delay = 0, checkState = false } = options;

  typeof time === 'string' && !isNaN(+time) && (time = +time);

  let target = this.className || this.id || this.tagName;

  try {
    const ani = this.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: (time as number) * 1000,
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
