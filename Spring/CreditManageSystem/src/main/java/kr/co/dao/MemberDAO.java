package kr.co.dao;

import kr.co.vo.MemberVO;

public interface MemberDAO {
	
	// �α���
	public MemberVO logIn(MemberVO vo) throws Exception;
	
	// ȸ������
	public void register(MemberVO vo) throws Exception;
}