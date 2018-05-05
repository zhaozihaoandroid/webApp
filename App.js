import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
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
            case "getContact":
                let data={
                    name:"张三",
                    phone:"110"
                }
                this.webView.postMessage(JSON.stringify(data))
                break
        }
    }
    a(){
        this.webView.postMessage("dialog("+44+")")
    }
    render() {
        return (
            /*<View style={{flex:1,backgroundColor:"green"}}>*/
                /*<TouchableOpacity onPress={this.a.bind(this)}>*/
                /*<Text  style={{height:100,width:100}}>rn调用h5</Text>*/
                /*</TouchableOpacity>*/
                <WebView
                    ref={(w)=>{this.webView=w}}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnable={true}
                    // injectedJavaScript={"document.addEventListener('message', function(e) {eval(e.data);})"}
                    scalesPageToFit={true}
                    domStorageEnable={true}
                    decelerationRate={"normal"}
                    startInLoadingState={true}
                    onMessage={this.onMessage.bind(this)}
                    source={require("./src/A.html")}
                >
                </WebView>
            // </View>
        );
    }
}

const styles = StyleSheet.create({

});
