import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WeatherEnvironmentCanadaWebPartStrings';
import WeatherEnvironmentCanada from './components/WeatherEnvironmentCanada';
import { IWeatherEnvironmentCanadaProps } from './components/IWeatherEnvironmentCanadaProps';

export interface IWeatherEnvironmentCanadaWebPartProps {
  description: string;
}

export default class WeatherEnvironmentCanadaWebPart extends BaseClientSideWebPart <IWeatherEnvironmentCanadaWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWeatherEnvironmentCanadaProps> = React.createElement(
      WeatherEnvironmentCanada,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
