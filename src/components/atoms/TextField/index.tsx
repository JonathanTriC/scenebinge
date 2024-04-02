import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {FC, useState} from 'react';
import {
  Platform,
  Pressable,
  ReturnKeyTypeOptions,
  Text,
  View,
} from 'react-native';
import {TextInput, TextInputProps} from 'react-native-paper';
import {styles} from './style';

export type TextFieldtProps = {
  label?: string;
  labelColor?: string;
  error?: boolean;
  success?: boolean;
  placeholder?: string;
  icon?: any;
  leftIcon?: any;
  rightIcon?: any;
  iconColor?: string;
  onPressIcon?: () => void;
  errorMessage?: string;
  errorMessageStyle?: any;
  successMessage?: string;
  successMessageStyle?: any;
  value?: any;
  onChangeText: (text: string) => void;
  onBlur?: (text: any) => void;
  onFocus?: (text: any) => void;
  maxLength?: any;
  leftOnPressIcon?: any;
  leftIconColor?: any;
  disabled?: any;
  inputMode?: TextInputProps['inputMode'];
  top?: number;
  bottom?: number;
  isNotOutline?: boolean;
  secure?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  ref?: any;
  keyboardType?: TextInputProps['keyboardType'];
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  returnKeyType?: ReturnKeyTypeOptions;
  inputTextStyle?: any;
  borderRadius?: any;
  multiline?: any;
  maskEntry?: any;
  placeholderTextColor?: any;
  onPress?: TextInputProps['onPressOut'];
  subLabel?: string;
  subLabelStyle?: any;
  editable?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  onEndEditing?: TextInputProps['onEndEditing'];
  disabledRightIcon?: boolean;
  defaultValue?: string;
  testID?: string;
  customRightText?: React.JSX.Element;
};

const TextField: FC<TextFieldtProps> = ({
  label,
  labelColor,
  error,
  success,
  placeholder,
  leftIcon,
  rightIcon,
  iconColor,
  onPressIcon,
  errorMessage,
  errorMessageStyle,
  successMessage,
  successMessageStyle,
  value,
  maxLength,
  onChangeText,
  top = 0,
  bottom = 0,
  isNotOutline,
  secure,
  leftOnPressIcon,
  leftIconColor,
  disabled,
  inputMode,
  borderColor,
  backgroundColor,
  borderWidth,
  keyboardType,
  returnKeyType,
  onBlur,
  onFocus,
  onSubmitEditing,
  inputTextStyle,
  borderRadius,
  multiline,
  editable,
  maskEntry = false,
  placeholderTextColor,
  onEndEditing,
  subLabelStyle,
  disabledRightIcon,
  defaultValue,
  testID,
  customRightText,
  ...props
}) => {
  const [isMaskEntry, setMaskEntry] = useState(maskEntry);
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        width: windowWidth - 32,
      }}>
      {label && (
        <Text
          style={{
            color: labelColor ?? Colors.white,
            letterSpacing: 0.25,
            lineHeight: 22,
          }}>
          {label}
        </Text>
      )}
      <Pressable onPress={props.onPress}>
        <TextInput
          textColor={Colors.white}
          testID={testID}
          multiline={multiline ?? false}
          disabled={disabled}
          // onPressOut={props.onPress}
          onEndEditing={onEndEditing}
          mode="outlined"
          inputMode={inputMode}
          secureTextEntry={secure && !isMaskEntry}
          activeOutlineColor={
            isNotOutline ? Colors.primary.base : Colors.primary.light1
          }
          editable={editable}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType ? keyboardType : 'default'}
          blurOnSubmit={false}
          onBlur={onBlur}
          onFocus={onFocus}
          style={{
            color: Colors.white,
            fontWeight: Platform.OS === 'android' ? 'bold' : '600',
            fontSize: 16,
            textAlignVertical: 'top',
            borderColor: borderColor ? borderColor : 'transparent',
            backgroundColor: backgroundColor
              ? backgroundColor
              : isNotOutline
              ? Colors.dark.dark2
              : Colors.primary.base,
            ...inputTextStyle,
          }}
          outlineStyle={{
            borderRadius: borderRadius ?? 30,
            borderColor: errorMessage
              ? Colors.danger.base
              : successMessage
              ? Colors.success.base
              : isNotOutline
              ? Colors.gray.gray100
              : Colors.gray.gray500,
            borderWidth: errorMessage || successMessage ? 1 : borderWidth,
          }}
          error={error}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          right={
            rightIcon ? (
              <TextInput.Icon
                icon={rightIcon}
                onPress={onPressIcon}
                color={() => iconColor}
                disabled={disabledRightIcon ?? disabled}
                size={24}
              />
            ) : secure ? (
              <TextInput.Icon
                icon={isMaskEntry ? 'eye' : 'eye-off'}
                onPress={() => {
                  setMaskEntry(!isMaskEntry);
                }}
                color={() => iconColor}
                size={20}
              />
            ) : (
              customRightText
            )
          }
          left={
            leftIcon ? (
              <TextInput.Icon
                icon={leftIcon}
                onPress={leftOnPressIcon}
                color={() => leftIconColor}
                size={20}
              />
            ) : null
          }
          onChangeText={text => onChangeText?.(text)}
          value={value}
          maxLength={maxLength}
          {...props}
          autoCapitalize={props.autoCapitalize}
          defaultValue={defaultValue}
        />

        {props.subLabel && (
          <Text style={[styles.subLabel, subLabelStyle && subLabelStyle]}>
            {props.subLabel}
          </Text>
        )}

        {errorMessage ? (
          <Text style={[styles.errorHelperText, errorMessageStyle]}>
            {errorMessage}
          </Text>
        ) : null}

        {successMessage ? (
          <Text style={[styles.successHelperText, successMessageStyle]}>
            {successMessage}
          </Text>
        ) : null}
      </Pressable>
    </View>
  );
};

export {TextField};
