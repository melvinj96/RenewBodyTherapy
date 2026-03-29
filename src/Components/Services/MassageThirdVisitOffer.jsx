/**
 * £5 off the third session across deep tissue, Swedish, and sports massage (any mix).
 * `selectValue` matches Contact form / Services.jsx `selectValue`.
 */
export const MASSAGE_THIRD_VISIT_OFFER_SELECT_VALUES = ['deep-tissue', 'swedish', 'sports'];

export function isMassageThirdVisitOfferEligible(selectValue) {
  return MASSAGE_THIRD_VISIT_OFFER_SELECT_VALUES.includes(selectValue);
}

/**
 * @param {'banner' | 'inline' | 'card'} variant
 */
function MassageThirdVisitOffer({ variant = 'banner' }) {
  if (variant === 'card') {
    return (
      <div className="mt-4 mb-5 rounded-lg border border-secondary/40 bg-secondary/5 px-3 py-2.5">
        <p className="text-sm font-semibold text-primary font-primary">Current offer</p>
        <p className="text-sm text-gray-700 mt-0.5">
          <span className="text-secondary font-semibold">£5 off</span> your third massage — mix deep tissue, Swedish,
          or sports across three visits.
        </p>
      </div>
    );
  }

  const title = '£5 off your third massage';

  const description = (
    <p className="text-base text-gray-700 mt-2 leading-relaxed">
      Book any three sessions of <strong>deep tissue</strong>, <strong>Swedish</strong>, or <strong>sports massage</strong>{' '}
      — you can <strong>mix and match</strong>. Your third eligible session is <strong>£5 off</strong> the usual price.
      Mention this offer when you book.
    </p>
  );

  const wrapperClass =
    variant === 'inline'
      ? 'mt-8 pt-8 border-t border-gray-200'
      : 'mb-10 max-w-3xl mx-auto';

  return (
    <div className={wrapperClass}>
      <div className="rounded-2xl border-2 border-secondary/35 bg-gradient-to-br from-secondary/10 via-white to-primary/5 p-6 sm:p-8 shadow-md">
        <p className="text-xs font-primary font-bold uppercase tracking-wider text-secondary">Current offer</p>
        <h3 className="text-xl sm:text-2xl font-tertiary font-bold text-primary mt-2">{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default MassageThirdVisitOffer;
