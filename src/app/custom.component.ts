import { BreakPoint, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
// import { validateSuffixes } from '@angular/flex-layout'

const CUSTOM = {
  'xs'    : 'screen and (max-width: 599px)',
  'gt-xs' : 'screen and (min-width: 600px)',
  'sm'    : 'screen and (min-width: 600px) and (max-width: 1023px)',
  'gt-sm' : 'screen and (min-width: 1024px)', 
  'md'    : 'screen and (min-width: 1024px) and (max-width: 1440px)',
  'gt-md' : 'screen and (min-width: 1440px)',
  'lg'    : 'screen and (min-width: 1440px) and (max-width: 1919px)',
  'gt-lg' : 'screen and (min-width: 1920px)',
  'xl'    : 'screen and (min-width: 1920px) and (max-width: 5000px)',
}

function updateMediaQuery(it: BreakPoint) {
  let mq = CUSTOM[ 'xs' ];
  if ( !!mq ) {
    it.mediaQuery = mq;  
  }
  return it;
}

export function CUSTOM_BREAKPOINT_FACTORY() {
  // return validateSuffixes(  DEFAULT_BREAKPOINTS.map(updateMediaQuery) );
  return DEFAULT_BREAKPOINTS.map(updateMediaQuery) ;
}
