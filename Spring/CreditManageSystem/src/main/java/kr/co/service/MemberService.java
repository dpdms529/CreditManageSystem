package kr.co.service;

import kr.co.vo.MemberVO;

public interface MemberService {

	// ȸ������
	public void register(MemberVO vo) throws Exception;
	
	// �α���
	public MemberVO logIn(MemberVO vo) throws Exception;
}
