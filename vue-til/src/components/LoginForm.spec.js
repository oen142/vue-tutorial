import {shallowMount} from '@vue/test-utils';
import LoginForm from "@/components/LoginForm";

describe('LoginForm.vue', () => {
    test('ID는 이메일 형식이어야 한다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test',
                    password: '1234'
                }
            }
        });
        const warningText = wrapper.find('.warning');
        expect(warningText.exists()).toBeTruthy()
    });
});

