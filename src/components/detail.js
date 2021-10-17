import React, { Component } from 'react';

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

    render() {


        //declare item
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div className="detail">
                <div className="from">
                    {this.state.items.from}<br />
                </div>
                <div className="detailCard">
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
            </div>

        )

    }
}

export default Detail;