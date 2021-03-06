package kr.co.service;

import kr.co.vo.MemberVO;

public interface MemberService {

	// 회원가입
	public void register(MemberVO vo) throws Exception;
	
	// 로그인
	public MemberVO logIn(MemberVO vo) throws Exception;
}
