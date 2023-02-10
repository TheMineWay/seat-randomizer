export interface FormInputValueModel<T, R = T> {
    _value: T;
    _rawValue: R;
    _v_isRef: boolean;
    _v_isShallow: boolean;
}