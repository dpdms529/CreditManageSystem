package kr.co.dao;

import kr.co.vo.memberVO;

public interface memberDAO {
	
	// �α���
	public memberVO logIn(memberVO vo) throws Exception;
	
	// ȸ������
	public void register(memberVO vo) throws Exception;
}