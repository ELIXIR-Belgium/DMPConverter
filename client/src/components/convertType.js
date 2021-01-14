import React, { Component } from "react";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

class ConvertType extends Component {
    render() {
        const { changeFunder, selectedFunder } = this.props
        const funders = ['FWO', 'ERC', 'H2020']
        const handleChange = e => {
            changeFunder(e.target.value)
        }
        return (
            <div className="funderType">

                <FormLabel component="legend">Convert from ELIXIR Belgium template to:</FormLabel>
                <div>
                    {funders.map(x => {
                        return (<FormControlLabel name="funder" value={x} control={<Radio color="primary" />}
                            label={x} checked={x === selectedFunder} onChange={handleChange} />)
                    })}</div>
            </div>
        )
    }

}

export default ConvertType