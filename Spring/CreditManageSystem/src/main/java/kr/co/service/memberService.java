package kr.co.service;

import kr.co.vo.memberVO;

public interface memberService {

	// ȸ������
	public void register(memberVO vo) throws Exception;
	
	// �α���
	public memberVO logIn(memberVO vo) throws Exception;
}
