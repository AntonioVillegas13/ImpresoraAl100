import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  Button,
  DeviceEventEmitter,
  NativeEventEmitter,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  View,
  TextInput
} from 'react-native';
import { BluetoothManager, BluetoothTscPrinter, BluetoothEscposPrinter } from 'react-native-bluetooth-escpos-printer';
// import ItemList from './ItemList';
// import SamplePrint from './SamplePrint';
// import { styles } from './styles';

const App = () => {
  const [pairedDevices, setPairedDevices] = useState([]);
  const [bleOpend, setBleOpend] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [pairedDs, setPairedDs] = useState([]);
  const [foundDs, setFoundDs] = useState([]);
  const [paired, setPaired] = useState([]);
  const [found, setFound] = useState([]);
  const [texto, setText] = useState("");
  const [fecha, setFecha] = useState("");

  const [boundAddress, setBoundAddress] = useState('');
  const verBluttoth = () => {

    BluetoothManager.isBluetoothEnabled().then((enabled) => {
      alert(enabled) // enabled ==> true /false
    }, (err) => {
      alert(err)
    });
  }

  const ScaneoDisp = () => {
    BluetoothManager.enableBluetooth().then((r) => {
      var paired = [];
      if (r && r.length > 0) {
        for (var i = 0; i < r.length; i++) {
          try {
            paired.push(JSON.parse(r[i])); // NEED TO PARSE THE DEVICE INFORMATION
          } catch (e) {
            //ignore
          }
        }
      }
      console.log(JSON.stringify(paired))
    }, (err) => {
      alert(err)
    });


    BluetoothManager.scanDevices()
      .then((s) => {
        var ss = JSON.parse(s);//JSON string
        setPairedDs(pairedDs.cloneWithRows(ss.paired || []));
        setFoundDs(foundDs.cloneWithRows(ss.paired || []))
        setLoading(false)
        {
          () => {
            setPaired(ss.paired || []);
            setFound(ss.found || []);
          }
        }
      }, (er) => {
        setLoading(false)

        alert('error' + JSON.stringify(er));
      });

  }
  let options = {
    width: 40,
    height: 30,
    gap: 20,
    direction: BluetoothTscPrinter.DIRECTION.FORWARD,
    reference: [0, 0],
    tear: BluetoothTscPrinter.TEAR.ON,
    sound: 0,
    text: [{
      text: 'Buenas Tardes, buen provecho :D ',
      x: 20,
      y: 0,
      fonttype: BluetoothTscPrinter.FONTTYPE.SIMPLIFIED_CHINESE,
      rotation: BluetoothTscPrinter.ROTATION.ROTATION_0,
      xscal: BluetoothTscPrinter.FONTMUL.MUL_1,
      yscal: BluetoothTscPrinter.FONTMUL.MUL_1
    }],


  }

  const Conexion = () => {
    BluetoothManager.connect("AC:3F:A4:A1:E9:4B") // the device address scanned.
      .then((s) => {
        setBoundAddress("AC:3F:A4:A1:E9:4B");
        setLoading(false)
        alert(s)
      }, (e) => {
        setLoading(false)
        alert(e);
      })
  }
let txt= String(texto);
console.log(txt)
let fec= String(fecha);
console.log(fec)


  const Impresion = async () => {

    await  BluetoothEscposPrinter.printText("Factura #"+(fecha)+"\n\r",{
      encoding:'UTF-8',
      codepage:0,
      widthtimes:0,
      heigthtimes:0,
      fonttype:5});

      await  BluetoothEscposPrinter.printText("Nombre:"+(txt)+"\n\r",{
        encoding:'UTF-8',
        codepage:0,
        widthtimes:0,
        heigthtimes:0,
        fonttype:1});



  }

  return <View>

    <Text> hOLA</Text>

    
    <TextInput
        // style={styles.input}
        onChangeText={setFecha}
        value={fecha}
        placeholder="FECHA"
       
      />
    <TextInput
        // style={styles.input}
        onChangeText={setText}
        value={texto}
        placeholder="Nombre"
       
      />
    <Button
      title='presiona'
      onPress={verBluttoth}

    />
    <Button
      title='presiona ver Dispo'
      onPress={Conexion}

    />
    <Button
      title='presiona ver Dispo'
      onPress={Impresion}

    />













  </View>
}

export default App;
