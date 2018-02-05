class HeroUtils {
  static getHitPoints(hero, real = false) {
    const { maxHp, damageTaken, hpTmpBonus } = hero;

    const realHP = (maxHp + hpTmpBonus) - damageTaken;
    if (real === true) {
      return realHP;
    }

    return Math.max(realHP, 0);
  }
}

export default HeroUtils;
