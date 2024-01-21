import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
            projectId='0f942d1b-5201-43c8-b8af-ac96fd0a590b'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage