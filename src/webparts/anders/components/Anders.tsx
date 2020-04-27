import * as React from 'react';
import styles from './Anders.module.scss';
import { IAndersProps } from './IAndersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ISPService } from '../../../common/services/ISPService';
import { ServiceScope, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { SPService } from '../../../common/services/SPService';
import { MockSPService } from '../../../common/services/MockSPService';

export default class Anders extends React.Component < IAndersProps, {} > {
  private _service: ISPService;

  constructor(props: IAndersProps) {
    super(props);

    // State osv

    const serviceScope: ServiceScope = this.props.serviceScope;

    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this._service = serviceScope.consume(SPService.serviceKey);
    } else {
      this._service = serviceScope.consume(MockSPService.serviceKey);
    }

  }


  public render(): React.ReactElement<IAndersProps> {
    return(
      <div className = { styles.anders } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
