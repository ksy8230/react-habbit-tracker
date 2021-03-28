import React, { PureComponent, FormEvent, FormEventHandler } from 'react';

type Props = {
    onAdd:(name:string) => void
}

class HabbitAddForm extends PureComponent<Props> {
    inputRef = React.createRef<HTMLInputElement>();
    formRef = React.createRef<HTMLFormElement>();

    onSubmit = (e:FormEvent) => {
        e.preventDefault();
        const name = this.inputRef.current?.value;
        name && this.props.onAdd(name);
        // this.inputRef.current!.value = '';
        this.formRef.current!.reset();
    }
    render() {
        console.log('form render!')
        return (
            <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
                <input type="text" className="add-input" placeholder="please enter your habbit" ref={this.inputRef} />
                <button className="add-button">
                    add
                </button>
            </form>
        );
    }
}

export default HabbitAddForm;