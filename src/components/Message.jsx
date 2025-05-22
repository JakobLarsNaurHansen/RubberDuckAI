function Message({ from, text }) {
    const isUser = from === 'user'
  
    const styles = {
      wrapper: {
        textAlign: isUser ? 'right' : 'left',
        marginBottom: '0.5rem',
      },
      bubble: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        maxWidth: '80%',
        backgroundColor: isUser ? '#0D96FA' : '#646464', // greenish for user, soft yellow for duck
        color: '#FFFF',
      },
    }
  
    return (
      <div style={styles.wrapper}>
        <span style={styles.bubble}>{text}</span>
      </div>
    )
  }
  
  export default Message
  