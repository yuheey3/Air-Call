import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`https://aircall-job.herokuapp.com/activities/${this.props.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    //archive 
    archiveData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ is_archived: true })
        };
        fetch(`https://aircall-job.herokuapp.com/activities/${this.props.id}`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ items: data.id }));

        this.goToActivePage();
    }

    //unarchive 
    unArchiveData() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ is_archived: false })
        };
        fetch(`https://aircall-job.herokuapp.com/activities/${this.props.id}`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ items: data.id }));

        this.goToArchivedPage();
    }

    //go to activityFeed page
    goToActivePage = async () => {

        const delay = ms => new Promise(res => setTimeout(res, ms));

        //wait to archive all data
        await delay(200);

        window.location = 'https://hardcore-joliot-dd08e9.netlify.app/activityFeed';
    }

    //go to archive page
    goToArchivedPage = async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        //wait to archive all data
        await delay(200);

        window.location = 'https://hardcore-joliot-dd08e9.netlify.app/archive';
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        //button text depends on archive condition
        const buttonText = this.state.items.is_archived ? "Unarchive" : "Archive";

        return (

            <div className="detail">
                <div className="from">
                    {this.state.items.from}<br />
                </div>
                <div className="detailCard" >
                    <div className="content"><br /> <br />
                        tried to call on {this.state.items.via}<br /><br />
                        <span className="space">
                            {new Date(items.created_at).toLocaleDateString()}</span>
                        <span className="space">
                            {new Date(this.state.items.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        <span className="space">
                            {this.state.items.call_type}<br /><br /></span>
                        To: {this.state.items.to}<br /><br />
                        Duration: {this.state.items.duration} seconds
                    </div>
                </div>
                <div className="button">
                    <Button variant="contained" onClick={() => this.state.items.is_archived ? this.unArchiveData() : this.archiveData()}> {buttonText}</Button>
                </div>
            </div>
        )
    }
}
export default Detail;