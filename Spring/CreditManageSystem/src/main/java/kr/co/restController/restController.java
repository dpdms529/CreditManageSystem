package kr.co.restController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class restController {
	@GetMapping("/hello")
    public List<String> Hello(){
        return Arrays.asList("���� ��Ʈ�� 8080", "����Ʈ ��Ʈ�� 3000");
    }
}
