import React, { FC } from 'react';
import styles from './Sample.module.css';

interface SampleProps {
  value: number;
}

const Sample: FC<SampleProps> = (props: SampleProps) => {
  return (
    <div className={styles.Sample} data-testid="Sample">
      <span className={styles.FontStyle}>Sample Component</span>
    </div>
  )
}
export default Sample;

// const Sample = (props: SampleProps) => {
//   return null
// }

//type FC<T> = FunctionalCompoment<T={}>
// interface FunctionalCompoment<T={}> {
//   (props: T): ReactElement
// }
