import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

export class SpinButtonBasicWithIconDisabledExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div style={{ width: '400px' }}>
        <SpinButton
          defaultValue="0"
          disabled={true}
          iconProps={{ iconName: 'IncreaseIndentLegacy' }}
          label={'Basic SpinButton:'}
          min={0}
          max={100}
          step={1}
          incrementButtonAriaLabel={'Increase value by 1'}
          decrementButtonAriaLabel={'Decrease value by 1'}
        />
      </div>
    );
  }
}
