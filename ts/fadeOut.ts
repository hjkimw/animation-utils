interface Element {
  playState?: AnimationPlayState;
  fadeOut(time?: number | string, options?: KeyframeAnimationOptions, checkState?: boolean): Promise<Element | null>;
}

Element.prototype.fadeOut = async function (
  time: number | string = 0.5,
  options?: KeyframeAnimationOptions,
  checkState: boolean = false
): Promise<Element | null> {
  if (this.playState === 'running') return null;

  typeof time === 'string' && !isNaN(+time) && (time = +time);

  let target: string = this.className || this.id || this.tagName;

  try {
    const ani: Animation = this.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: (time as number) * 1000,
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
