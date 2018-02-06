class HeroUtils {
  static getHitPoints(hero, real = false) {
    const { maxHp, damageTaken, hpTmpBonus } = hero;

    const realHP = (maxHp + hpTmpBonus) - damageTaken;
    if (real === true) {
      return realHP;
    }

    return Math.max(realHP, 0);
  }

  static getAbilityModifier(hero, abilityName) {
    return Math.floor((hero[abilityName] - 10) / 2);
  }
}

export default HeroUtils;
