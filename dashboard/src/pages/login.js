import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LAMP from '../lamp.js';
import EventBus from 'eventing-bus'
import Grid from '@material-ui/core/Grid';

const inputSubmitStyle = {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
}

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class Login extends React.Component {
    state = {
        id: "",
        password: "",
        errorText: ""
    }

    componentDidMount() {
        document.title = "Login"
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({[name]: value})
        if (this.state.errorText)
            this.setState({errorText: ""})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let type = (this.state.id === 'root' ?
            'root' : (this.state.id.includes('@') ?
                'researcher' : 'participant'))
        LAMP.set_identity(type, this.state.id, this.state.password).then(res => {
            EventBus.publish("login", res)
            this.props.history.replace('/home')
        }).catch(err => {
            console.warn("error with auth request", err)
            this.setState({
                errorText: `error: ${err.message}`
            })
        })
    }

    handleRegister = (event) => {
        this.props.history.push('/register')
    }

    render = () =>
    <Grid container justify="space-around" alignItems="center" style={{marginTop: '48px'}}><Grid item xs={4}>
        <Paper square={true} elevation={12} style={{padding: '16px'}}>
            <h1 style={{ marginTop: '0.67em', marginBottom: 0 }}>Please log in.</h1>
            <Typography variant="body2" color="primary" style={{ lineHeight: '0.5em', paddingLeft: 0 }}>
                LAMP Researcher
            </Typography>
            <form action="" onSubmit={this.handleSubmit}>
                <TextField
                    required
                    name="id"
                    label="ID"
                    margin="normal"
                    variant="outlined"
                    className={styles.textField}
                    style={{width: '100%'}}
                    value={this.state.id}
                    onChange={this.handleChange}
                />
                <TextField
                    required
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    className={styles.textField}
                    style={{width: '100%'}}
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <br />
                <Button
                    variant="outlined"
                    color="default"
                    style={{width: '45%'}}
                    onClick={this.handleRegister}>
                    Register
                </Button>
                <Button
                    variant="raised"
                    color="primary"
                    type="submit"
                    style={{float: 'right', width: '45%'}}
                    onClick={this.handleSubmit}>
                    Login
                    <input type="submit" style={inputSubmitStyle}/>
                </Button>
            </form>
            <Snackbar
                open={this.state.errorText !== ""}
                message={this.state.errorText}
                autoHideDuration={2000}
            />
        </Paper>
    </Grid></Grid>
}

export default withRouter(Login);