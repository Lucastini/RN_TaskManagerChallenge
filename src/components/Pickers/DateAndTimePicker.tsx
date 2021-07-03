import React from "react";
import { View, Platform } from "react-native";
//import DateTimePicker from "@react-native-community/datetimepicker"; //npm install @react-native-community/datetimepicker --legacy-peer-deps
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { IPickerState } from "../../screens/AddTaskSreen";

type DateAndTimePickerTypeProp = {
  pickerState: IPickerState;
  setPickerState: Function;
  reciveTaskData: Function;
};

const DateAndTimePicker = (prop: DateAndTimePickerTypeProp) => {
  const { pickerState, setPickerState, reciveTaskData } = prop;

  //It runs the "reciveTaskData" on the onChange Picker event with the selected date
  const confirm = (/*e: any = null,*/ selectedDate: Date) : void => {
    const currentDate = selectedDate;
    hidePicker()
    reciveTaskData(pickerState.propiety, currentDate);
  };

  const hidePicker = () : void => {
    setPickerState({ ...pickerState, show: false });
  }

  return (
    <View>
      {//pickerState.show && 
        <DateTimePickerModal
          testID="dateTimePicker"
          isVisible={pickerState.show}
          date={
            pickerState.initialValue ?
               typeof pickerState.initialValue === 'object'?
                  pickerState.initialValue : null
              : new Date(Date.now())
          }
          mode={pickerState.mode}
          is24Hour={true}
          display="default"
          //onChange={onChange}
          onConfirm={confirm}
          onCancel={hidePicker}
          minimumDate={new Date(Date.now())}
        />
      }
    </View>
  );
};

export default DateAndTimePicker;
