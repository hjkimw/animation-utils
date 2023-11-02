interface HTMLElement {
  playState?: AnimationPlayState;
  fadeOut(
    time?: number | string,
    options?: KeyframeAnimationOptions,
    checkState?: boolean
  ): Promise<HTMLElement | null>;
}

HTMLElement.prototype.fadeOut = async function (
  time: number | string = 0.5,
  options?: KeyframeAnimationOptions,
  checkState: boolean = false
): Promise<HTMLElement | null> {
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
    checkState && console.log(`${target} is fadeOut ${this.playState}! ✅`);

    this.remove();
    return this;
  } catch (error) {
    throw `Please enter the parameter value in the correct format..👀
           \n Current parameters: ${time}`;
  }
};
