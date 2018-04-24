import React, { Component } from 'react';
import {
    StyleSheet,
    WebView,
    NativeModules
} from 'react-native';

export default class App extends Component{
    onMessage(event){
        let data=event.nativeEvent.data
        let jData=JSON.parse(data)
        switch (jData.type){
            case "callPhone":
                NativeModules.NativeMethodModule.callPhone(jData.phone)
                break;
        }
    }
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                javaScriptEnable={true}
                scalesPageToFit={true}
                domStorageEnable={true}
                decelerationRate={"normal"}
                startInLoadingState={true}
                onMessage={this.onMessage.bind(this)}
                source={require("./src/A.html")}
            >
            </WebView>
        );
    }
}

const styles = StyleSheet.create({

});
