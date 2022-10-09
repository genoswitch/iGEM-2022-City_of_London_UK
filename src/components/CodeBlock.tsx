import * as React from 'react';

import Card from 'react-bootstrap/Card';
import { CopyBlock, github } from 'react-code-blocks';

class CodeBlock extends React.Component {
  static defaultProps = {
    title: 'Code Snippet',
    language: 'python',
    code: `print("Hello, world!")`,
    showLineNumbers: false,
  };

  render() {
    return (
      <div style={{ paddingBottom: 16 }}>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <CopyBlock
              codeblock
              text={this.props.code}
              language={this.props.language}
              showLineNumbers={this.props.showLineNumbers}
              theme={github}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CodeBlock;
