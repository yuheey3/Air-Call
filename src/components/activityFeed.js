import React, { Component } from 'react';
import Divider from '@mui/material/Divider';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Grid from '@mui/material/Grid';


class ActivityFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
        this.itemTotal = this.itemTotal.bind(this);
    }

    componentDidMount() {
        fetch('https://aircall-job.herokuapp.com/activities')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    itemTotal(items) {
        var total = items.length;
        return total;
    }

    render() {
        //declare item
        var { isLoaded } = this.state;

        //filter Unarchived
        const unArchiveItems = this.state.items.filter(item => {
            return (item.is_archived === false);
        });


        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div className="activity">
                <br />
                <div className="card" >
                    <div className="icon">
                        <ArchiveOutlinedIcon />
                    </div>
                    <p className="title">Archive all calls</p>
                </div>


                {unArchiveItems.map(item => (

                    <ul key={item.id} onClick={() => { this.props.history.push(`/detail/${item.id}`) }}>
                        <br />

                        <Divider> {new Date(item.created_at).toLocaleDateString()}</Divider><br />
                        <div className="card">
                            <Grid>
                                <div className="icon">
                                    <PhoneCallbackIcon />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <span className="title"> {item.from} <br /></span>
                                tried to call on {item.via}<br />
                            </Grid>
                            <Grid>
                                <span className="time">
                                    {new Date(item.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                </span>
                            </Grid>
                        </div>

                    </ul>


                ))};
            </div>
        )
    }
}

export default ActivityFeed;