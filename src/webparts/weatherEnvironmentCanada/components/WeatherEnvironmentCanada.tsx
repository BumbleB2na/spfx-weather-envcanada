import * as React from 'react';
import styles from './WeatherEnvironmentCanada.module.scss';
import { IWeatherEnvironmentCanadaProps } from './IWeatherEnvironmentCanadaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WeatherEnvironmentCanada extends React.Component<IWeatherEnvironmentCanadaProps, {}> {
  public render(): React.ReactElement<IWeatherEnvironmentCanadaProps> {
    return (
      <div className={ styles.weatherEnvironmentCanada }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
