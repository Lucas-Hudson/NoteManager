import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const Switches = props => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
    });
    const {updateTheme} = props;

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        updateTheme();
    };

    const PurpleSwitch = withStyles({
        switchBase: {
            color: purple[200],
            '&$checked': {
                color: purple[100],
            },
            '&$checked + $track': {
                backgroundColor: purple[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    return (
        <div>
            <PurpleSwitch
                checked={state.checkedB}
                onChange={handleChange}
                color="secondary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
};

export default Switches;